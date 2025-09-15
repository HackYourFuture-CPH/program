# Session plan

- Focus on having lots of in class exercises.
- DON'T teach everything, let the students investigate topics on their own as well!
- Focus on how to read documentation, google answers and google errors!!
- Teach towards the students being able to solve the homework.

## Session Outline

- Express
  - What is Express
    - [Live coding: setup a server](./session-materials/01-server.md)
  - Routing in Express
    - `app.use`
    - `app.get`
    - [Live coding: routing](#appget-vs-appuse)
    - [Excercise: Setup routing](./session-materials/03-api.md)
  - URL parameters in Express
    - [Explanation and live coding](#query-parameters-vs-url-parameters)
    - [Excercise: GET endpoints](./session-materials/05-get-endpoints.md)
  - Route order
    - [Live coding](#route-order)
    - Logging and debugging
    - Focus on the students understanding **the order** in which things are executed
  - Middleware
    - `next` method
    - Modifying `request` and `response`
    - <https://fullstackopen.com/en/part3/node_js_and_express#express>
    - [Live coding](#middleware)
    - Exercise
- Postman
  - Create collection and save queries
  - Sending get requests requests
    - Query parameters
    - Parameters

## Exercises

1. [Server](./session-materials/01-server.md): Setup project
1. [DB schema](./session-materials/02-schema.md): Setup MySQL database schema
1. [API](./session-materials/03-api.md): Snippets API exercises
   - [POST endpoint](./session-materials/04-post-endpoint.md)
   - [GET endpoints](./session-materials/05-get-endpoints.md)
   - [Authentication](./session-materials/06-auth.md)

## Live coding

### `app.get` vs `app.use`

Let's clarify the routing in Express using an [Express router](https://expressjs.com/en/starter/basic-routing.html).

Code example can be found in the [module materials](../module-materials/index.js) and [router](../module-materials/examples/router.js).

### Query parameters vs URL parameters

#### URL parameters

These are part of the URL path used to identify specific resources.

**Example:** GET `/api/snippets/123` represented in our router by `/api/snippets/:id`

In the above URL, `123` is an ID of the snippet to fetch. The route indicates that we will only return this one resouce or nothing else. `:id` is **dynamic**, so that we can define one route and be sure to get and parse any ID passed. In the same time, passing an `:id` is **required**.

#### Query parameters

These come after the `?` character and are usually key=value pairs, separated by `&`.

**Example:** GET `/api/snippets?tag=popular`

Used for sorting, filtering, pagination, or tracking, are usually **optional**. Can also be multiple values.

Code example can be found in the [parameters file](../module-materials/examples/parameters.js).

### Route order

Run `nodemon ./src/backend/route-order.js`. Try and implement this functionality from the bottom while explaining.

### Middleware

Run using `nodemon ./src/backend/middleware.js`. Try and implement this functionality from the bottom while explaining.
