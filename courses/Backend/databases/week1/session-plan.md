# Session Plan

- Focus on practical modeling exercises and SQL practice
- Emphasize database design principles and when to use different relationships
- Ensure students understand how to translate business requirements into database structures
- Build toward the homework assignment step by step
- The lesson contains SQL code for the database creation and relationship queries. It can be explained using sqlite from the CLI or with a GUI tool like DBeaver. It can also be followed by the students on their own machines.

## Entity-Relationship Modeling

- What is an ERD and why do we use it?
  - Entities, attributes, relationships
  - Types of relationships (1:1, 1:M, M:M)
  - Primary keys and foreign keys

- ERD Exercise: Task Management System
  - Start simple, then add complexity
  - Discuss design choices as a group

## Translating ERDs to Database Schema

- Moving from conceptual to physical model
  - Tables, columns, constraints
  - Data types in SQL
  - Normalization basics (focus up to 3rd normal form)

- Database Creation Exercise: Create Task DB [Code](#database-creation)
  - Write CREATE TABLE statements
  - Add constraints (NOT NULL, UNIQUE, etc.)
  - Implement foreign keys

### Database Creation

```shell
# Create a new SQLite database file
sqlite3 test.db

# Create users table
CREATE TABLE users (
  user_id INTEGER PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

# List tables to verify creation
.tables

# Create tasks table
CREATE TABLE tasks (
  task_id INTEGER PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  status VARCHAR(20) DEFAULT 'To Do',
  due_date DATE,
  assigned_to INTEGER,
  FOREIGN KEY (assigned_to) REFERENCES users(user_id)
);
```

## CRUD Operations in SQL

- Basic SQL operations
  - INSERT - Adding new records
  - SELECT - Retrieving data
  - UPDATE - Modifying existing records
  - DELETE - Removing records

- SQL CRUD Exercise
  - Create sample data
  - Practice different query types

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

Design an ER model and implement the respective database for the data in [this file](assets/articles_example.json).

Don't worry if you can't do every step perfectly. The important thing is to understand the main ideas. Take your time and ask questions if you're confused.

Steps:
1. Analyze the JSON structure
2. Identify entities and relationships
3. Create an ERD
4. Translate to CREATE TABLE statements
5. Insert sample data
6. Write queries to retrieve information
