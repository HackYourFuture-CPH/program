# SQL basics

## What is SQL?

SQL (Structured Query Language) - is a structurized way you can query relational databases.

It can be another programming language, but at this point you will discover basic statements that will allow you to **select** the data you need, **insert** or **update** data that need changing and also **delete** them if needed.

In the other section, you will also learn a bit about Data Definition Language - again, just another SQL face - that can even allow you to create whole databases!

Remember, you do not need to remember all of these at this point. Make sure to read them throughly and understand the syntax and logic behind the wording.

## SQL Queries

Generic SQL query is stuctured as follows:

**SELECT** [1 - what do you want to select] **FROM** [2 -where do you want to select the data from] _[3 - ...]_ **;**

where:

1. Is either list of columns or `*` to get all the columns
2. Is the table name you are querying for data
3. Is there rest of the statement, like conditions etc.

Let's take a look at examples:

### A Basic SELECT Statement

```sql
SELECT * FROM users;
SELECT name, email FROM users;
SELECT * FROM students;
```

- Gets all columns (`*`) from "students" table.

### More Complex SELECT Statements

```sql
SELECT name FROM users WHERE age > 21;
SELECT * FROM posts WHERE published = TRUE AND created_at > '2024-01-01';
SELECT name, birthdate FROM students WHERE age > 18 ORDER BY birthdate DESC;
```

- Selects specific columns.
- Filters with `WHERE`.
- Orders results.

### Pattern Matching with LIKE

`%` before or after the string of letters indicates a wildcard - something might be there, you don't care exactly what.

```sql
SELECT * FROM users WHERE name LIKE 'J%';   -- Names starting with J
SELECT * FROM users WHERE email LIKE '%@gmail.com'; -- Gmail users
SELECT name FROM students WHERE name LIKE 'A%';
```

- Finds names starting with 'A'.

### Limiting and Ordering Results

```sql
SELECT * FROM posts ORDER BY created_at DESC LIMIT 10;
SELECT * FROM students ORDER BY age DESC LIMIT 5;
```

- `ORDER BY` sorts.
- `LIMIT` restricts how many rows you get.

### GROUP BY

- `GROUP BY` is used to **group rows that have the same values in specified columns**.
- Usually used with **aggregate functions** to calculate values for each group.

```sql
SELECT user_id, COUNT(*) FROM posts GROUP BY user_id;
SELECT course_id, COUNT(*) FROM enrollments GROUP BY course_id;
```

- This returns the number of posts **per user**.
- Each group (user_id) has its own count.
- Groups rows with same course_id.
- Useful when you want summaries.

Use cases:

- Count orders per customer
- Average score per student
- Total sales per product
  **GROUP BY is needed when:**
- You want one row per group (like "count of students per course").

### Aggregate Functions

- `AVG(column)` - Average
- `COUNT(column)` - Count non-null
- `SUM(column)` - Total sum
- `MIN(column)` - Minimum
- `MAX(column)` - Maximum
- **AVG**: Average value
- **COUNT**: How many rows
- **SUM**: Total
- **MIN**/**MAX**: Smallest/largest value

Example:

```sql
SELECT AVG(age) FROM users;
SELECT COUNT(*) FROM posts WHERE published = TRUE;
SELECT course_id, AVG(grade) FROM enrollments GROUP BY course_id;
```

### HAVING vs WHERE

- `WHERE` filters rows **before** grouping.
- `HAVING` filters groups **after** the `GROUP BY`.

  -- Group and filter groups
  SELECT customer_id, SUM(total) AS total_spent
  FROM orders
  GROUP BY customer_id
  HAVING SUM(total) > 1000;

### JOIN

- Combines data from multiple tables.

**Example:**
Example:

```sql
-- Filter rows first
SELECT * FROM orders WHERE total > 100;
SELECT students.name, enrollments.grade
FROM students
JOIN enrollments ON students.student_id = enrollments.student_id;
```

- JOIN lets you fetch combined info from several tables in one query.

### Compare JOIN WHERE vs Cartesian Product

- Without JOIN, `SELECT * FROM A, B` creates a giant mess (every row paired with every other row — Cartesian product).
- JOIN links only matching rows based on a condition.

## Data Definition and Manipulation

In this section, you are going to have a nifty cheat-sheet for DB manipulation queries. Before that you need to understand what a database schema is.

### Schema

- A **schema** is like a **blueprint** or **map** of your database.
- It includes:
  - Tables
  - Columns for each table and their data types (e.g., INTEGER, VARCHAR, DATE)
  - Primary keys and foreign keys
  - Indexes (for faster querying)
  - Constraints:
    - `NOT NULL`: Column must have a value
    - `UNIQUE`: No duplicates allowed
    - `CHECK`: Validate values against a rule (e.g., age >= 18)
    - `DEFAULT`: Default value if none provided
  - Views (virtual tables based on SELECT queries)
  - Stored procedures and functions
  - Triggers (automated actions on data changes)

**Example:**

```text
Schema: ecommerce
Tables:
  - users (id PK, email UNIQUE NOT NULL, created_at DEFAULT CURRENT_TIMESTAMP)
  - orders (id PK, user_id FK → users.id, total CHECK(total >= 0))
  - products (id PK, name NOT NULL, price DECIMAL)
Indexes:
  - idx_user_email ON users(email)
Views:
  - active_users AS SELECT * FROM users WHERE active = true;
```

### Data Definition Language (DDL)

- Commands that define or change structure.
- Examples: CREATE, ALTER, DROP.

### Creating Tables

```sql
CREATE TABLE students (
  student_id INT PRIMARY KEY,
  name VARCHAR(100),
  birthdate DATE
);
```

### Altering Tables

```sql
ALTER TABLE students ADD email VARCHAR(100);
```

### Indexes

- Speeds up searching.

```sql
CREATE INDEX idx_name ON students(name);
```

### Foreign Key Constraints

- Ensures a link between tables.

```sql
ALTER TABLE enrollments
ADD FOREIGN KEY (student_id) REFERENCES students(student_id);
```

### INSERT INTO

```sql
INSERT INTO students (student_id, name) VALUES (1, 'Alice');
```

### UPDATE

```sql
UPDATE students SET name = 'Alicia' WHERE student_id = 1;
```

### DELETE

```sql
DELETE FROM students WHERE student_id = 1;
```
