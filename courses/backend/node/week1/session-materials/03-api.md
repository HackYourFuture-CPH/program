# API

The end goal of the exercise is to implement the following routes:

- `POST /api/snippets` to create a snippet
- `GET /api/snippets` to get a list of snippets
- `GET /api/snippets/:id` to get a single snippet

We will create the snippet routes in a different file, `api/snippets.js`, which will export an [Express router](https://expressjs.com/en/starter/basic-routing.html).

That will look something like this:

```js
// Contents of api/snippets.js

import express from "express";
const router = express.Router();

// GET /api/snippets
router.get("/", async (request, response) => {
  // TODO
});

// TODO: POST /api/snippets
// TODO: GET /api/snippets/:id

export default router;
```

We will also have the database connection in a separate file:

```js
// Contents of database.js

import knex from "knex";

const dbFile = "PATH_TO_YOUR_SQLITE_DB";

const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: dbFile,
  },
});

export default knexInstance;
```

At this point verify that your project structure looks like this:

- api
  - snippets.js
- app.js
- database.js
- package.json
