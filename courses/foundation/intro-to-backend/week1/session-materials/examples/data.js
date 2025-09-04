import express from "express";
import sqlite3 from "sqlite3";

const dbFile = "../../../databases/week1/assets/test.sqlite3";
// NOTE: if you didn't clone the entire programme repo
// replace the above path with actual path to your sqlite instance

const db = new sqlite3.Database(dbFile);
const app = express();

app.use(express.json());

app.get("/", async (request, response) => {
  const { query } = request;

  if (query.table) {
    // for example: http://localhost:3000/?table=task
    const data = await fetchData(`select * from ${query.table}`);
    return response.json(data);
  }

  const tables = await fetchData(`SELECT name FROM sqlite_schema`);
  response.json(tables);
});

app.post("/status", async (request, response) => {
  const { id, name } = request.body;

  if (!id || !name || name.length === 0) return response.sendStatus(400);

  await writeData(`insert into status(id, name) values(${id}, "${name}")`);
  response.sendStatus(200);
});

app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});

//helper sqlite3+nodejs functions
export const fetchData = async (query) => {
  return new Promise((resolve, reject) => {
    db.all(query, {}, (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
};

export const writeData = async (query) => {
  return new Promise((resolve, reject) => {
    db.run(query, {}, (err, row) => {
      if (err) reject(err);
      resolve(row);
    });
  });
};
