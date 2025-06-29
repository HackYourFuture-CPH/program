# Optional read: SQL part 2

This sections explains more advanced concepts and by no means is required in this module. 


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
