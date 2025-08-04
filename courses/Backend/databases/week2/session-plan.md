# Session Plan - Week 2

- The idea is to build on the previous week's knowledge, focusing on advanced database features and practical applications.
- Use the same task database throughout all examples for consistency
- Use problem-based approach: show issues, guide students to solutions

> [!NOTE]
> Trainees should have their `tasks.sqlite3` database from Week 1 ready to use with a GUI tool. [Tools setup - Week 1](../week1/preparation.md#tools-setup)


## Setup DB and start the example API

- A `tasks.sqlite3` database is provided. It contains the SQL statements from [tasks.sql](../week1/session-materials/tasks.sql)
- In case you want to recreate it, run the following command in your terminal:

```shell
cd example-api
sqlite3 tasks.sqlite3 < tasks.sql
npm run dev
```

## Aggregate Functions

### Reporting
- A common business need: "We need reports from our task management system"
- Show inefficient approach: calculating stats in application code
  - <http://localhost:3000/api/stats/tasks-per-user-unoptimized>
  - Show code in `/tasks-per-user-unoptimized` endpoint
- Introduce SQL aggregates as a more performant solution
  - Show code in `/tasks-per-user` and `/status-distribution` endpoints

### Key Aggregate Functions
Other examples of questions we can answer with aggregates:
- **COUNT**: How many tasks were created?
- **SUM**: Total estimated hours across tasks
- **AVG**: Average completion time
- **MIN/MAX**: Earliest/latest due dates
- **GROUP BY**: Essential for aggregation

### EXERCISE: Write Your Own Aggregate Queries

**Students work with their tasks.sqlite3 from Week 1**

Write SQL queries to answer these questions:
1. How many tasks are overdue? (due_date < today)
2. What's the average number of tasks per user?
3. Which status has the most tasks?
4. Find the user with the most completed tasks.

**Solutions discussion**

<details>
<summary>Click to see the solutions</summary>

This can be executed directly in the SQLite command line or any SQLite client.
```sql
-- Count overdue tasks
SELECT COUNT(*) AS overdue_count
FROM task
WHERE due_date < DATE('now');

-- Average tasks per user
SELECT AVG(task_count) AS average_tasks
FROM (
  SELECT user_id, COUNT(*) AS task_count
  FROM user_task
  GROUP BY user_id
);

-- Status with most tasks
SELECT s.name, COUNT(*) AS task_count
FROM task t
JOIN status s ON t.status_id = s.id
GROUP BY s.id, s.name
ORDER BY task_count DESC
LIMIT 1;

-- User with most completed tasks (status_id = 3 for 'Done')
SELECT u.name, COUNT(*) AS completed_tasks
FROM user u
JOIN user_task ut ON u.id = ut.user_id
JOIN task t ON ut.task_id = t.id
WHERE t.status_id = 3
GROUP BY u.id, u.name
ORDER BY completed_tasks DESC
LIMIT 1;
```
</details>

---

## Database Security - SQL Injection Demo

### Interactive Vulnerability Discovery

- Introduce task search feature: "Let's add search to our app"
- Show vulnerable search endpoint
- Show how it's fixed in the `search/secure` endpoint

### Normal search

Test this searches with the example API running and ask students what they expect to happen.

<http://localhost:3000/api/search/vulnerable?query=wash>

### Leak user data

The user can construct a query to extract user data:

<http://localhost:3000/api/search/vulnerable?query=%27%20UNION%20SELECT%20name%2C%20email%2C%20phone%20FROM%20user%3B%20-->

- Analyze the `search/vulnerable/` endpoint from `index.js` together

### Security Best Practices

- Always use parameterized queries or ORMs
- Validate input on both client and server
- Security audits both with automated tools and manual reviews

## Transactions - Data Integrity

> [!IMPORTANT]
> Transactions are atomic units of work that can be **committed** or **rolled back**. When a transaction makes multiple changes to the database, either all the changes succeed when the transaction is committed, or all the changes are undone when the transaction is rolled back.

Database transactions have properties that are collectively known by the acronym ACID, for atomicity, consistency, isolation, and durability.

### ACID Properties
- **Atomicity**: All operations succeed or all fail
- **Consistency**: Database rules are maintained
- **Isolation**: Concurrent transactions don't interfere
- **Durability**: Changes persist after completion

### Example use case
- Requirement: "Transfer task ownership between team members"

Use this API call to demonstrate what can happen without transactions.

```shell
curl -X POST http://localhost:3000/api/tasks/1/transfer-unsafe -H "Content-Type: application/json" -d '{"fromUserId": 1, "toUserId": 2, "shouldFail": true}'
```

Same example transferring task ownership between users. Rely on an SQL example for simplicity

```sql
BEGIN TRANSACTION;
  DELETE FROM user_task WHERE user_id = 1 AND task_id = 5;
  INSERT INTO user_task (user_id, task_id) VALUES (2, 5);
-- If something goes wrong the changes will not be applied
ROLLBACK;
```

## Database Types Overview

### When NOT to use relational databases?

- **Key-Value Stores (Redis)**: Caching, real-time features
- **Document Stores (MongoDB)**: Flexible schemas, JSON-like data, rapid prototyping
- **Graph Databases (Neo4j)**: Social networks, recommendation engines
- **Time-Series**: IoT sensor data, financial data, monitoring metrics

## Deployment

### Deployment Overview

- Show how to migrate data from local sqlite database to PostgreSQL in render.com
- Use <https://github.com/HackYourFuture-CPH/hyf-project-template/tree/main/api>
- Explain the importance of environment variables for database connections
