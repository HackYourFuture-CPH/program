# Session Plan

---

**Code inspiration**: To find the code examples for this class as well as prepared Postman collection, navigate to [session materials](./session-materials/) and follow the setup instructions in the readme.

---

## What is Node.js?

Node.js is software that allows you to use JavaScript to write the application part of the backend. The application is written in different .js files, and are then read and executed using the node command in the Command Line. For example, node script.js.

Read the following article and code along: Introduction into Node.js

Software builds on other software. Node.js is powerful because it allows us to use software others have written to help build our own unique applications. In Node.js these are called modules/packages/dependencies (can be used interchangeably). An easy way to get access to these is by using the Node Package Manager, also known as npm.

Read the following article and code along: A Beginner’s Guide to npm — the Node Package Manager

It is also powerful because we can use the language we already know, JavaScript, to write backend applications. Watch the following video and code along: Node.js Crash Course

## Building a simple HTTP webserver

While there are many ways to achieve this, the most common package to use when making webservers is [Express](https://expressjs.com/).

To create a simple Node application and run Express, we are going follow few simple steps:

1. Run `npm init` in your directory of choice and follow the step to setup a simple Node app.
2. Run `npm install express` to install the Express package.
3. Navigate to your main js file (most likely `index.js`)
4. Import `express` into the file.
5. Initate the server using `const app = express()`
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

## Creating endpoints

Our server is up and running, but it certainly doesn't do much at this point. We need to add some methods to access or modify the data via server. Below is a simplified structure for such a method:

```javascript
app.get(
  // or .post .put .delete -> this tells the server what KIND of HTTP request this endpoint will handle
  "/", //path to the endpoint
  () => {}, // callback function to act on the endpoint call
);
```

Callback function in the Express endpoint has a predefined structure as well. For starters, it has certain arguments:

1. First is `request` argument. It can contain additional information about the request for the server. [Read more](https://expressjs.com/en/5x/api.html#req)
2. Second is `response`. It has methods to communicate out of the server back to the requester. [Read more](https://expressjs.com/en/5x/api.html#res.app)

Let's stop here and take a look:

```javascript
app.get("/", (request, response) => {
  //perhaps get some information from request here

  //then the response data using the response object methods
  response.send();
});
```

### GET request

In HTTP webpage, the GET request is also how we can obtain the HTML documents.

Navigate to `examples/pages.js` to showcase this.

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

Navigate to `examples/math.js` to showcase this.

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

## Fetching data from database

Let's connect to previous module where we created a small database in Sqlite. This is one of the most common uses of the backend architecture, to serve as a middle layer between user and a database.

Navigate to `examples/data.js` to showcase this.

### Connecting to database

No matter what kind of database you are using, first you need to connect to it. In Sqlite this is simple, we just need a path to the database.

```javascript
import sqlite3 from "sqlite3";

const dbFile = "PATH_TO_THE_FILE/test.sqlite3";

const db = new sqlite3.Database(dbFile);
```

...and we are connected!

### Fetching data

Because of how Sqlite API is constructed, there might be some use of helper functions to retrieve the data from the connected database, for example:

```javascript
export const fetchData = async (query) => {
  return new Promise((resolve, reject) => {
    db.all(query, {}, (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
};
```

Now we can create a simple GET endpoint and fetch our Task data like so:

```javascript
app.get("/", async (request, response) => {
  const tasks = await fetchData(`SELECT * FROM task`);
  response.json(tasks);
});
```

## Using Postman

Using Postman we can execute more elaborate queries, as well as easily test our code.

> **IRL example:** Teams use Postman to document their API and test the endpoints against development database!

1. Launch Postman app
2. Make sure your Node server is running
3. (Optional) Import Postman collection available in [session materials](./session-materials)
4. Run your queries

### POST request

Save some data in your database! Here is an example endpoint to do so:

```javascript
app.post("/status", async (request, response) => {
  const { id, name } = request.body;

  if (!id || !name || name.length === 0) return response.sendStatus(400);

  await writeData(`insert into status(id, name) values(${id}, "${name}")`);
  response.sendStatus(200);
});
```

Test it in Postman. Remember to add the body to your request with required data!
Remember as well that Express requires to be notified of potential data objects coming via requests. To do so, remember to add:

```javascript
app.use(express.json());
```

### Postman possibilites

It is a very powerful tool that enables you to create and test all sorts of endpoints. Make sure to explore the options and find out more in the [Postman docs](https://learning.postman.com/docs/sending-requests/requests/)

---

## Exercises

1. [Exercise 1](../exercises/exercise1.md): Run a simple webserver and add a basic route
1. [Exercise 2](../exercises/exercise2.md): Connect to a database and returning more complex data
