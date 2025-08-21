# Session Plan

- Focus on practical modeling exercises and SQL practice
- Emphasize database design principles and when to use different relationships
- Ensure students understand how to translate business requirements into database structures
- Build toward the homework assignment step by step

## Table of Contents
1. The main idea is to start with a requirement
2. Build the Entity-Relationship Diagram (ERD) the trainees
3. Translate the ERD into SQL statements
    1. See the limitations of the initial design
4. Introduce foreign keys (status)
    1. Add many-to-many relationships (user-task)
5. Practice querying relationships
6. Let the trainees practice designing a database based on [articles_example.json](session-materials/articles_example.json)

> [!NOTE]
> **Teaching Format:**
> - **DEMO** = Mentor shows on screen, students observe
> - **EXERCISE** = Students work on their own machines

## Entity-Relationship Modeling

### What is an ERD and why do we use it?

- Entities, attributes, relationships
- Types of relationships (1:1, 1:M, M:M)
- Primary keys and foreign keys

### INTERACTIVE DEMO: ERD Task Management System

- Mentor leads ERD creation with student input using Excalidraw/Draw.io
- Ask trainees to suggest entities, attributes, and relationships

**Scenario**: Design a simple task management system with these requirements:
- Users can have multiple tasks
- Tasks have a title, description, and due date
- Tasks can have one of three statuses: "Not started", "In progress", "Done"
- Each task is assigned to exactly one user

## Translating ERDs to Database Schema

### DEMO: Moving from conceptual to physical model

- How do you actually store this in a database?
- Tables, columns, constraints
- Data types in SQL
- Normalization basics (focus up to 3rd normal form)
  - Example: move `status` to a separate table to avoid redundancy

### EXERCISE 1: Database Creation (10/15 minutes)

Using the ERD from the previous exercise, students need to write CREATE TABLE statements for storing users and tasks with statuses.

```sql
CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  -- Your columns here
);

CREATE TABLE task (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  -- Your columns here
);
```

**Hints:**
- Use INTEGER PRIMARY KEY for IDs
- Don't forget NOT NULL constraints
- created DATETIME NOT NULL,

- Use appropriate data types (TEXT, INTEGER, DATETIME)

### DEMO: Database creation solution

<details>
<summary>Mentor shows the complete solution</summary>

```shell
# Create a new SQLite database file or use a GUI tool
touch test.sqlite3

# Create users table
CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT
);

CREATE TABLE task (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  created DATETIME NOT NULL,
  updated DATETIME NOT NULL,
  due_date DATETIME,
  status TEXT NOT NULL,
);
```
</details>

#### Add some sample data

```sql
INSERT INTO user (name, email, phone) VALUES
  ('John Doe', '', '+4512345678'),
  ('Jane Smith', 'jane@gmail.com', '+4512345679');

INSERT INTO task (title, description, created, updated, due_date, status) VALUES
  ('Study SQL Queries', 'Practice writing SQL queries for data retrieval', datetime('now'), datetime('now'), '2025-08-02', 'Done');
  ('Learn Database Design', 'Study ER modeling and normalization', datetime('now'), datetime('now'), '2025-08-10', 'Not started'),
  ('Write Unit Tests', 'Add test coverage for user authentication', datetime('now'), datetime('now'), '2025-08-05', 'Not started'),
  ('Deploy Application', 'Set up production environment', datetime('now'), datetime('now'), '2025-08-20', 'Not started');
```

At this moment, the database works but... is not very useful. 😅 It still has some limitations.

1. The status is repeated in every task
2. The users are not linked to tasks.

> ![NOTE]
> Ask trainees for possible improvements.


## Defining Relationships

### DEMO: Understanding Foreign Keys and Relationships

**Key concepts:**
- Foreign keys maintain data integrity
- Many-to-many relationships require linking tables
- JOINs connect related data across tables

The steps we will take:

#### 1. Move `status` to a separate table to avoid redundancy
```sql
CREATE TABLE status (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE
);

-- Insert initial statuses
INSERT INTO status (name) VALUES ('Not started'), ('In progress'), ('Done');

-- Modify task table to use status_id
ALTER TABLE task ADD COLUMN status_id INTEGER DEFAULT 1;
UPDATE task SET status_id = 1 WHERE status = 'Not started';
UPDATE task SET status_id = 2 WHERE status = 'In progress';
```

> [!IMPORTANT]
> What we have done:
> - Created a `status` table to store task statuses. The benefit? Avoids redundancy and allows easy updates
> - Modified the `task` table to reference `status_id` from the `status` table

Normally this is known as [database migrations](https://en.wikipedia.org/wiki/Schema_migration). We'll not cover this in detail, but it's a common practice in real-world applications.


#### 2. Create a linking table for users and tasks to handle many-to-many relationships

```sql
-- Many-to-many relationship between users and tasks
CREATE TABLE user_task (
  user_id INTEGER NOT NULL,
  task_id INTEGER NOT NULL,
  PRIMARY KEY (user_id, task_id),
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
  FOREIGN KEY (task_id) REFERENCES task(id) ON DELETE CASCADE
);

-- Link a user to a task
INSERT INTO user_task (user_id, task_id) VALUES (1, 1);
```

> [!IMPORTANT]
> **What we have done:**
> - Created an intermediary table called `user_task` to connect users and tasks.
> - This allows a user to have multiple tasks and a task to be assigned to multiple users.

This is usually called a **linking table** or **junction table**. It allows us to represent many-to-many relationships in a relational database. [Wikipedia](https://en.wikipedia.org/wiki/Many-to-many_(data_model))

### EXERCISE 2: Relationship Query Practice

### Sample Data Insertion

```sql
-- Insert users
INSERT INTO users (username, email) VALUES
  ('john_doe', 'john@example.com'),
  ('jane_smith', 'jane@example.com'),
  ('pavel', 'pavel@example.com');

-- Insert tasks
INSERT INTO tasks (title, description, status, due_date, assigned_to) VALUES
  ('Create database schema', 'Design and implement DB structure', 'In Progress', '2025-08-01', 1),
  ('Write API documentation', 'Document all endpoints', 'To Do', '2025-08-15', 2),
  ('Fix login bug', 'Users cannot reset password', 'Done', '2025-07-20', 3),
  ('Implement search feature', 'Add search functionality to homepage', 'To Do', '2025-08-10', 3);
```

## Working with Relationships

- Querying related data

  - Introduction to JOINs (INNER, LEFT)
  - Filtering with WHERE clauses
  - Using foreign keys effectively

- Relationship Query Exercise: Practice these queries
  1. Get all the tasks assigned to `Pavel`;
  2. Find how many tasks each user is responsible for;
  3. Find how many tasks with a `status=Done` each user is responsible for;

### Relationship Queries

```sql
-- 1. Get all tasks assigned to Pavel
SELECT t.*
FROM tasks t
JOIN users u ON t.assigned_to = u.user_id
WHERE u.username = 'pavel';

-- 2. Find how many tasks each user is responsible for
SELECT u.username, COUNT(t.task_id) AS task_count
FROM users u
LEFT JOIN tasks t ON u.user_id = t.assigned_to
GROUP BY u.username
ORDER BY task_count DESC;

-- 3. Find how many tasks with status='Done' each user is responsible for
SELECT u.username, COUNT(t.task_id) AS completed_tasks
FROM users u
LEFT JOIN tasks t ON u.user_id = t.assigned_to AND t.status = 'Done'
GROUP BY u.username
ORDER BY completed_tasks DESC;
```

## Final Exercise: Design and implement a database for existing data

Design an ER model and implement the respective database for the data in [this file](session-materials/articles_example.json).

Don't worry if you can't do every step perfectly. The important thing is to understand the main ideas. Take your time and ask questions if you're confused.

Steps:

1. Analyze the JSON structure
2. Identify entities and relationships
3. Create an ERD
4. Translate to CREATE TABLE statements
5. Insert sample data
6. Write queries to retrieve information
