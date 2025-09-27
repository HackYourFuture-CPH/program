import express from "express";
import knexLibrary from "knex";

const dbFile = "../../../databases/week1/assets/test.sqlite3";
// NOTE: if you didn't clone the entire program repo
// replace the above path with actual path to your sqlite instance

const knex = knexLibrary({
  client: "sqlite3",
  connection: {
    filename: dbFile,
  },
});

const app = express();

app.use(express.json());

app.get("/", async (request, response) => {
  const { query } = request;

  if (query.table) {
    // for example: http://localhost:3000/?table=task
    const data = await knex.raw(`select * from ${query.table}`);
    return response.json(data);
  }

  const tables = await knex.raw(`SELECT name FROM sqlite_schema`);
  response.json(tables);
});

app.post("/status", async (request, response) => {
  const { id, name } = request.body;

  if (!id || !name || name.length === 0) return response.sendStatus(400);

  await knex.raw(`insert into status(id, name) values(${id}, "${name}")`);
  response.sendStatus(200);
});

app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});
