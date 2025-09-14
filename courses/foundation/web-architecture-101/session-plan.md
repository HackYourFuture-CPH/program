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

### HTTP Request Analysis

Analyze the following URL and break it down into its components:

`https://api.github.com/users/octocat/repos?sort=created&per_page=10`

1. Identify the scheme, host, path, and query parameters
2. What HTTP method would be used to access this URL?
3. What Content-Type would you expect in the response?
4. What happens when you type this URL in a browser?

### Frontend vs Backend Classification

Categorize the following statements into: **Frontend**, **Backend** or **Database**:

- "Runs in the user's browser"
- "Handles HTTP requests and responses"
- "Can manipulate the DOM"
- "Stores user information permanently"
- "Sends JSON data to the server"
- "Validates user input before saving"
- "Renders HTML pages"
- "Connects to a database"
- "Executes JavaScript on the server"
- "Serves static files like CSS and images"
- "Processes form submissions"
- "Shows a loading spinner while waiting for data"
- "Encrypts passwords before storing them"
- "Updates the page without refreshing"
- "Sends emails to users"

Work in small groups and present your categorization to the team.

### API Design

Design an API for a simple blog application.

_Note: You don't need to create proper REST endpoints - just focus on the basic structure and HTTP methods._

Design endpoints for:

- Getting all blog posts
- Getting a specific blog post
- Creating a new blog post
- Updating a blog post
- Deleting a blog post

For each endpoint, specify:

- HTTP method
- URL path
- Request format (if applicable)
- Response format
- Status codes

Example:

```markdown
GET /api/posts
Response: 200 OK
Content-Type: application/json
Body: [{"id": 1, "title": "My First Post", "content": "..."}]
```

### System Architecture Design

Design a simple to-do list application with basic CRUD operations.

1. **Create**: Add a new todo item
2. **Read**: Display all todo items
3. **Update**: Mark a todo as completed
4. **Delete**: Remove a todo item

Draw a simple diagram showing:

- Where the todo data is stored
- How the frontend communicates with the backend
- What happens when a user adds a new todo
- How frontend looks like

Keep it simple - just one page with a list of todos and basic functionality.

_Note: This exercise works well when done together with trainees, as they have a similar assignment. Consider also creating sequence diagrams to show the communication flow between components - this will help prepare them for the assignment._
