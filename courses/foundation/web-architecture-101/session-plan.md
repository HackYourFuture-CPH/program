# Session Plan

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
- **CRUD** stands for **Create, Read, Update, Delete** - the four basic operations for managing data. Conceptual introduction - we'll explore CRUD in detail in the databases module
- These operations map to HTTP methods:
  - **Create** → add new data
  - **Read** → retrieve data
  - **Update** → modify existing data
  - **Delete** → remove data
- Most web applications are essentially CRUD applications with a user interface
- HTTP methods:
  - `GET` = retrieve data = R(ead) in CRUD
  - `POST` = send data = C(reate) in CRUD
  - `PUT` = update data = U(pdate) in CRUD
  - `DELETE` = delete data = D(elete) in CRUD
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

### Frontend vs Backend vs Database Classification

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

Design an API for an advanced to-do list application for teams.

_Note: You don't need to create proper REST endpoints - just focus on the basic structure and HTTP methods._

Design endpoints for:

- Getting all tasks
- Getting a specific task
- Creating a new task
- Updating a task (e.g., changing status, assigning to user)
- Deleting a task

For each endpoint, specify:

- HTTP method
- URL path
- Request format (if applicable)
- Response format
- Status codes

Example:

```markdown
GET /api/tasks
Response: 200 OK
Content-Type: application/json
Body: [{"id": 1, "title": "Fix login bug", "description": "Debug authentication issue", "status_id": 2, "user_id": 2, "created": "2024-01-15 10:30:00", "updated": "2024-01-15 14:20:00", "due_date": "2024-01-20 17:00:00"}]
```

_Note: This design will be revisited in upcoming modules - you'll create the database in the databases module and implement these endpoints in the intro-to-backend module!_

### System Architecture Design

_This should be done as a collaborative demo with the mentor leading and asking questions to trainees._

#### Part 1: Architecture Diagram (Mentor Demo)

Design a simple to-do list application with basic CRUD operations:

1. **Create**: Add a new todo item
2. **Read**: Display all todo items
3. **Update**: Mark a todo as completed
4. **Delete**: Remove a todo item

**Mentor should:**

- Help trainees to visualize application first
- Draw the architecture diagram on a whiteboard/digital tool while asking trainees questions
- Guide trainees to identify: frontend, backend, database components
- Ask: "Where should the todo data be stored?" "How does the frontend talk to the backend?"
- Keep it simple - just one page with a list of todos and basic functionality
- Show a simplified example (not professional-level complexity)

#### Part 2: Sequence Diagrams (Mentor Demo + Trainee Exercise)

##### Mentor Demo (first 2 flows)

- Explain what sequence diagrams are with simple examples
- Demonstrate CREATE and READ flows step-by-step
- Show the communication: User → Frontend → Backend → Database
- Use simple format like:
  ```text
  User → Frontend → Backend → Database
  User clicks "Add Todo" button
  Frontend sends POST /todos with todo data
  Backend saves data to database
  Backend sends success response
  Frontend updates the page
  ```

##### Trainee Exercise

- Work in pairs to create sequence diagrams for UPDATE and DELETE flows
- Share results with the rest of the trainees
- Mentor shows "correct" examples at the end

_Note: This prepares trainees for the assignment, therefore can't be skipped._
