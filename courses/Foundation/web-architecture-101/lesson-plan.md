# Lesson plan

## Lesson materials
These are some examples of previously created materials by mentors that you can use yourself, or for inspiration.

- Web Architecture 101 ([key](lesson-materials/web-architecture-101.key), [pdf](lesson-materials/web-architecture-101.pdf), [zip](lesson-materials/web-architecture-101.zip) by [@rvedotrc](https://github.com/rvedotrc))

## Lesson outline

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

### The front end

Key points:

- Usually the starting URL is going to be `text/html`
- How HTML refers to other resources
- JavaScript is the only available language
- What JavaScript in the browser can and can't do
- Typical things we'll do with front-end JavaScript

### The back end

Key points:

- HTTPS listen, handle request
- What HTTP requests/responses "look like"
- Serving static content
- It is just software. We can extend it!
- Any language, but we'll be using JavaScript

### Data and APIs

Key points:

- TODO
- Data store services (in the abstract). Peristing data away from the web server.

### More complex setups

Key points:

- This section talks about things _beyond_ what Hack Your Future covers
- It's a taster of what things start to look like in larger, real-world scenarios
- The client/server terminology
- Adding a database server
- Multiple environments