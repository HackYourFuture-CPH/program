# Session plan (Week 1)

In this session we will focus on Express.js, which is an application framework for building webservers in an easy manner. Although we could write everything from scratch in Node, we don’t want to. In many situations a webserver is generic enough for us and we gain a lot by using something that just works and makes our lives as developers easier – as long as what we are trying to do is within the scope of Express.

## Contents

- [Preparation](./preparation.md)
- [Session Plan](./session-plan.md) (for mentors)
- [Assignment](./assignment.md)

## Session Learning Goals

By the end of this session, you will be able to:

- [ ] Explain what Express is and describe why it is used for building backend applications.
- [ ] Implement routing in Express to handle different HTTP requests and endpoints.
- [ ] Use logging and debugging tools to monitor and troubleshoot Node.js applications.
- [ ] Apply middleware functions in Express to process requests and responses.
- [ ] Use Postman to test and debug APIs you have built.


TODO - Move this content somewhere else

When writing an Express application we are registering routes on HTTP keywords (GET,POST,PUT, DELETE) and handler functions for those routes.

The most basic express webserver looks like the following:

```js
// We require the express package after having installed it
// via “npm i express”
import express from "express";

// We create an express instance and bind it to our app const
const app = express();

// We register the first route with the following;

// all “GET” requests on the path “/“
// will be handled by the function (req, res) {}
app.get("/", function (req, res) {
  // the handler receives the request on “req”
  // and has access to the response on “res”

  // res.send allows us to send a response to a request
  res.send("hello world");
});

// We start the express webserver by listening to port 3000
app.listen(3000);
```

If we run this script, node will start up and run the code ending with app.listen(3000). This tells Node to bind and listen for connections on this specified host and port.

If there is no specified host, Node will bind to localhost and the Node application will be available on <http://localhost:3000/>.

If you open that URL in the browser you will see “hello world” (without any styling).

## Extensibility

This is a very basic example of an express application. There many parameters to tweak and cases to take into consideration.
One of the first things we’d like to do in a typical Express application is to not return strings or HTML, but instead use JSON as the transport encoding format. Meaning we accept JSON in requests and we can respond with JSON formatted data.

There are a few good extensions or middleware that is easy to plug into express and allows us to tweak and change some of the parts of the webserver. Some of these middleware extensions include body-parser, compression, cors, errorhandler - find the full list here: <https://expressjs.com/en/resources/middleware.html>.

### Relevant links

- [Preparation](preparation.md)
- [Homework](homework/README.md)
- [Lesson plan](lesson-plan.md)

### Express.js

In Node.js it's possible to make a HTTP server using the native `http` module. However, this is rarely used in practice. Instead, we'll use [Express.js](https://expressjs.com/en/4x/api.html), a backend framework that can do what the `http` module does and much more (in a simpler, faster and more readable way).

Practically speaking, what can we do with a web server like `http` or `Express`? All the magic that makes the frontend work:

- Get and store data that comes from the frontend
- Make API calls to other services
- Secure data that comes from both the frontend and the database
- Any other type of calculation or business logic
