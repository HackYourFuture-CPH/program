# SQL basics

## What is SQL?

SQL (Structured Query Language) - is a structurized way you can query relational databases.

It can be another programming language, but at this point you will discover basic statements that will allow you to **select** the data you need, **insert** or **update** data that need changing and also **delete** them if needed.

In the other section, you will also learn a bit about Data Definition Language - again, just another SQL face - that can even allow you to create whole databases!

Remember, you do not need to remember all of these at this point. Make sure to read them thoroughly and understand the syntax and logic behind the wording.

## SQL Queries

Generic SQL query is structured as follows:

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

## CRUD: Create, Update, Delete - Data Manipulation queries

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

## Optional read: More advanced SQL

If you are interested in more advanced SQL concepts as well as Data Definition Language, [here is an optional reading material](./optional--sql.md). Please note, it is **out of scope** of this module!
