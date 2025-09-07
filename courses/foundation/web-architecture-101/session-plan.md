# Session plan

## Session materials

These are some examples of previously created materials by mentors that you can use yourself, or for inspiration.

- Web Architecture 101 ([key](session-materials/web-architecture-101.key), [pdf](session-materials/web-architecture-101.pdf), [zip](session-materials/web-architecture-101.zip) by [@rvedotrc](https://github.com/rvedotrc))

## Session outline

### Introduction

Key points:

- This module is rather different from the other technical modules
- You don't have to remember everything in this module
- The purpose of this module is to give an understanding of how the remaining modules fit together

### HTTP

Key points:

- The structure of a URL (scheme, host, path)
- Finding a host with DNS
- Establishing a connection (TCP)
- Content-Type instead of file extension
- An HTTP GET request/response, at the most simple level

### Front end vs back end

Key points:

- To make our web page available, we have to have a server
- That server needs to run some software: a web (http) server
- The server needs whatever software _it_ runs, plus files for the browser
- Some of our code runs in the browser; some of our code runs on the host
- This is "front end" and "back end"
- The frontend and backend communicate via HTTP. Frontend makes a request, and backend answers with a response.
- We get to write software for both sides.

### The front end

Key points:

- Usually the starting URL is going to be `text/html`
- How HTML refers to other resources
- JavaScript is the only available language
- What JavaScript in the browser can and can't do
- Typical things we'll do with front-end JavaScript, like manipulating web pages and making requests to servers

### The back end

Key points:

- The primary goal is to send back responses for every HTTP request
- HTTPS listen, handle request
- What HTTP requests/responses "look like"
- Serving static content
- It is just software. We can extend it!
- Any language, but we'll be using JavaScript
- We can also do things like read and write files (on the server), talk to a database or to other servers

### Data and APIs

Key points:

- What an API is
- JSON as the common data format
- HTTP methods:
  - `GET` = retrieve data
  - `POST`, `PUT` = send data
  - `DELETE` = delete data
- How different methods carry data:
  - `GET` → uses query parameters
  - `POST`, `PUT` → use request body
  - `DELETE` → usually no data
- Role of content type: servers specify how to interpret data (e.g. `application/json`)
- Idea that "the page" and "the data" are separate things
- Data store services (in the abstract). Persisting data away from the web server.

### More complex setups

Key points:

- This section talks about things _beyond_ what Hack Your Future covers
- It's a taster of what things start to look like in larger, real-world scenarios
- The client/server terminology
- Adding a database server
- Multiple environments
- Deployment is about making sure the server has all the code, files and settings that it needs

## Exercises

TODO
