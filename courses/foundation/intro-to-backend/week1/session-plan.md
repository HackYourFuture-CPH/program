# Session Plan

---

**Code inspiration**: To find the code examples for this class as well as prepared Postman collection, navigate to [session materials](./session-materials/) and follow the setup instructions in the readme.

---

## What is Node.js? (25 mins)

### Run your first app (10 mins)

[Node.js](https://nodejs.org/en/about) is a software that allows you to use JavaScript to write the application part of the backend. The application can be written in different .js files, which are then read and executed using the `node`` command in the Command Line. For example:

```bash
node script.js
```

**Read the following article and code along: [Introduction into Node.js](https://dev.to/sojida/introduction-to-nodejs-4ne8)**

After completing the article, you see that in just one JavaScript file you can create and run a simple web server!

### Building Node applications (15 mins)

Software builds on other software. Node.js is powerful because it allows us to use software others have written to help build our own unique applications. In Node.js these are called **modules/packages/dependencies** (can be used interchangeably). An easy way to get access to these is by using the [Node Package Manager](https://docs.npmjs.com/about-npm), also known as `npm`.

**Read the following article and code along (chapter 3 & 4): [NPM basics for new developers](https://daily.dev/blog/npm-basics-for-new-developers)**

It is also powerful because we can use the language we already know, JavaScript, to write backend applications!

## Building a simple HTTP webserver (10 mins)

While there are many ways to achieve this, the most common package to use when making webservers is [Express](https://expressjs.com/).

To create a simple Node application and run Express, we need to follow few simple steps below. If you followed the previous part, you already have points 1 and 2 covered!

1. Run `npm init` in your directory of choice and follow the step to setup a simple Node app.
2. Run `npm install express` to install the Express package.
3. Navigate to your main js file (most likely `index.js`)
4. Import `express` into the file.
5. Initiate the server using `const app = express()`
6. Setup the listener for your server.

The finished code should look as follows:

```javascript
import express from "express";
const app = express();

app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});
```

At this point we have a server!!!

Looks similar? We did the same in the first section! This time, we can build on top of it and create our first serious Node application.

## Creating endpoints (5 mins)

Our server is up and running, but it certainly doesn't do much at this point. We need to add some **methods** to access or modify the data via server. Below is a simplified structure for such a method:

```javascript
app.get(
  // or .post .put .delete -> this tells the server what KIND of HTTP request this endpoint will handle
  "/", //path to the endpoint
  () => {}, // callback function to act on the endpoint call
);
```

**Callback function** in the Express endpoint has a predefined structure as well. For starters, it has certain **arguments**:

1. First is `request` argument. It can contain additional information about the **request** for the server. [Read more](https://expressjs.com/en/5x/api.html#req)
2. Second is `response`. It has methods to communicate the **response** out of the server back to the requester. [Read more](https://expressjs.com/en/5x/api.html#res.app)

Let's stop here and take a look:

```javascript
app.get("/", (request, response) => {
  //perhaps get some information from request here

  //then the response data using the response object methods
  response.send();
});
```

> **IRL example**: The arguments can have any names, as it is order that matters! Most often teams use `req` and `res`.

### GET request (10 mins)

In HTTP webpage, the GET request is also how we can obtain the HTML documents.

_Navigate to `examples/pages.js` to showcase this._

For example, one might fetch simple HTML structure like this:

```javascript
app.get("/", (_request, response) => {
  response.send(`
      <h1>Main page</h1>
      <h2>Shows main content</h2>
  `);
});
```

GET request might receive additional arguments, either in the form of subpaths, but also **query parameters**.

Any endpoint can also perform much more logic than just fetching/setting data.

_Navigate to `examples/math.js` to showcase this._

```javascript
app.get("/add", (request, response) => {
  console.log("Your query: " + request.query); // you can access your request query

  if (!request.query.a && !request.query.b)
    // you can add some validation if the query is correct
    return response.send(`
    <h1> No values to add! </h1>
    Append <code>?a=2&b=3</code> to the url
  `);

  const { a, b } = request.query; // you can fetch the information from the query
  const sum = Number(a) + Number(b); // you can perform operations

  response.send(sum); // you can send back the output
});
```

#### Exercise (15 mins)

Try it yourself in [exercise 1](../exercises/exercise1.md): Run a simple webserver and add a basic route.

## Fetching data from database (45 mins)

Let's connect to previous module where we created a small database in Sqlite. This is one of the most common uses of the backend architecture, **to serve as a middle layer between a user and a database**.

To communicate with the database, we are going to use another library called [knex](https://knexjs.org/). To make this work, we need to run a CLI command to install the necessary packages:

```bash
npm i sqlite3 knex
```

_Navigate to `examples/data.js` to showcase this._

### Connecting to database (5 mins)

No matter what kind of database you are using, first you need to establish a connection with it.

In Sqlite this is simple, we just need a **path** to the database and a Knex method to establish a connection.

```javascript
import knexLibrary from "knex";

const dbFile = "PATH_TO_THE_FILE/test.sqlite3";

const knex = knexLibrary({
  client: "sqlite3",
  connection: {
    filename: dbFile,
  },
});
```

...and we are connected!

### Fetching data (10 mins)

To fetch data from the database, we will of course use SQL like you learned in [previous module](../../databases/README.md). We will combine the queries with Knex library method called `raw` like this:

```javascript
const results = await knex.raw("SELECT * FROM some_table");
```

Now we can create a simple GET endpoint and fetch our Task data from the database like so:

```javascript
app.get("/", async (request, response) => {
  // we use async here to show that we are going to be awaiting something
  const tasks = await knex.raw(`SELECT * FROM task`);
  // we use 'await' to make sure get back the information from the database to send back to the client
  response.json(tasks);
});
```

> **IRL example:** Knex is actually a very powerful library used commonly in node backend projects. When researching, you will encounter many more methods than `raw`. Read more [in the knex documentation](https://knexjs.org/guide/query-builder.html#knex) if you're interested :)

#### Exercise (30 mins)

Try it yourself! Follow the [exercise 2](../exercises/exercise2.md): Connect to a database and returning more complex data.

## Postman (25 mins)

### Using Postman (10 mins)

Using Postman we can execute more elaborate queries, as well as easily test our code.

> **IRL example:** Teams use Postman to document their API and test the endpoints against development database!

1. Launch Postman app
2. Make sure your Node server is running
3. (Optional) Import Postman collection available in [session materials](./session-materials)
4. Run your queries

### POST request (10 mins)

Save some data in your database! Refresh the CRUD queries from the [last module](../../databases/README.md). Here is an example endpoint to do so:

```javascript
app.post("/status", async (request, response) => {
  const { id, name } = request.body;

  if (!id || !name || name.length === 0) return response.sendStatus(400);

  await knex.raw(`insert into status(id, name) values(${id}, "${name}")`);
  response.sendStatus(200);
});
```

Test it in Postman. Remember to add the **body to your request** with required data!
Remember as well that Express requires to be notified of potential data objects coming via requests. To do so, remember to add:

```javascript
app.use(express.json());
```

### Postman possibilities (5 mins)

It is a very powerful tool that enables you to create and test all sorts of endpoints. Make sure to explore the options and find out more in the [Postman docs](https://learning.postman.com/docs/sending-requests/requests/)

---

## Exercises

1. [Exercise 1](../exercises/exercise1.md): Run a simple webserver and add a basic route
1. [Exercise 2](../exercises/exercise2.md): Connect to a database and returning more complex data
