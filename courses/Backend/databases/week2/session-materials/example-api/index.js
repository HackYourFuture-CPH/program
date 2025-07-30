import express, { json } from "express";
import knex from "knex";

const app = express();
const port = 3000;

// Database configuration
const db = knex({
  client: "sqlite3",
  connection: {
    filename: "./tasks.db",
  },
  useNullAsDefault: true,
});

// Middleware
app.use(json());

app.get("/", (req, res) => {
  res.send("Welcome to the Task Management API");
});

// Get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await db.raw("SELECT * FROM user");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all tasks
app.get("/api/stats/tasks-per-user-unoptimized", async (req, res) => {
  try {
    const tasks = await db.raw(
      "SELECT task.*, user_task.user_id FROM task INNER JOIN user_task ON task.id = user_task.task_id",
    );

    const users = await db.raw("SELECT * FROM user");
    const userTaskCounts = {};

    for (const user of users) {
      userTaskCounts[user.name] = 0; // Initialize count

      for (const task of tasks) {
        if (task.user_id === user.id) {
          userTaskCounts[user.name] += 1; // Increment count for this user
        }
      }
    }

    res.json(userTaskCounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Routes for aggregate functions examples
app.get("/api/stats/tasks-per-user", async (req, res) => {
  try {
    const stats = await db.raw(
      `SELECT u.name, COUNT(ut.task_id) as task_count, SUM(CASE WHEN t.status_id = 1 THEN 1 ELSE 0 END) as completed_tasks
      FROM user u
      LEFT JOIN user_task ut ON u.id = ut.user_id
      LEFT JOIN task t ON ut.task_id = t.id
      GROUP BY u.id, u.name
      ORDER BY task_count DESC`,
    );

    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/stats/status-distribution", async (req, res) => {
  try {
    const stats = await db.raw(
      `SELECT status.name as status, COUNT(task.id) as count
      FROM task
      JOIN status ON task.status_id = status.id
      GROUP BY status.id, status.name`,
    );

    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Vulnerable search endpoint for SQL injection demo
app.get("/api/search/vulnerable", async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Query parameter required" });
  }

  try {
    // VULNERABLE: Direct string concatenation
    const sql = `SELECT id, title, created FROM task WHERE title LIKE '%${query}%'`;

    console.warn("Executing vulnerable SQL:", sql);
    const results = await db.raw(sql);

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Secure search endpoint
app.get("/api/search/secure", async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Query parameter required" });
  }

  try {
    // SECURE: Using parameterized queries
    const results = await db("task")
      .where("title", "like", `%${query}%`)
      .select("*");

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/tasks/:taskId/transfer-unsafe", async (req, res) => {
  try {
    const { fromUserId, toUserId, shouldFail } = req.body;
    const { taskId } = req.params;

    await db("user_task").where({ user_id: fromUserId, task_id: taskId }).del();

    // Force failure based on body parameter
    if (shouldFail) {
      throw new Error("System failure - task doesn't belong to anyone");
    }

    await db("user_task").insert({ user_id: toUserId, task_id: taskId });

    res.json({ message: "Task transferred successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Task management API running at http://localhost:${port}`);
  console.log("Available endpoints:");
  console.log("- GET /api/users - Get all users");
  console.log(
    "- GET /api/stats/tasks-per-user-unoptimized - Unoptimized tasks per user",
  );
  console.log("- GET /api/stats/tasks-per-user - Aggregate: tasks per user");
  console.log(
    "- GET /api/stats/status-distribution - Aggregate: task status distribution",
  );
  console.log(
    "- GET /api/search/vulnerable?query=... - Vulnerable search (for demo)",
  );
  console.log("- GET /api/search/secure?query=... - Secure search");
  console.log(
    "- POST /api/tasks/:taskId/transfer-unsafe - Transfer task ownership (unsafe demo)",
  );
});
