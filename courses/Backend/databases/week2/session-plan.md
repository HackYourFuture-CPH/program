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

### Exercise: Write Your Own Aggregate Queries

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

## Database Security

### SQL Injection Demo

- The idea is to show the vulnerable search endpoint and how it can be exploited

Normal search: <http://localhost:3000/api/search/vulnerable?query=wash>

Leak user data: <http://localhost:3000/api/search/vulnerable?query=%27%20UNION%20SELECT%20name%2C%20email%2C%20phone%20FROM%20user%3B%20-->

### Exercise: SQL Injection Attack Practice

**Students try to exploit the vulnerable endpoint**

Using the running API, try these attacks:

1. Extract all user emails
2. Try to delete data (see what happens)
3. Attempt to find hidden information

**Attack strings to try:**

```
' OR '1'='1
'; DROP TABLE tasks; --
' UNION SELECT * FROM user --
```

**Then examine the secure endpoint code together**

### Security Best Practices

- Show how it's fixed in the `search/secure` endpoint
- Always use parameterized queries or ORMs which make things easier for developers
- Mention the importance of validation, both in client and server

## Database Types Overview

### When NOT to use relational databases?

- **Key-Value Stores (Redis)**: Caching, real-time features
- **Document Stores (MongoDB)**: Flexible schemas, JSON-like data
- **Graph Databases (Neo4j)**: Social networks, recommendation engines
- **Time-Series**: IoT sensor data, financial metrics

## Deployment Overview

### Production Deployment

- Show how to migrate data from local SQLite database to PostgreSQL in render.com
- Environment variables for database connections
- Use existing HYF template: <https://github.com/HackYourFuture-CPH/hyf-project-template/tree/main/api>

## Summary & Q&A

**Key takeaways:**

- SQL aggregates are your friends for calculations: reporting, dashboard stats
- Security: Never trust user input, always validate!
- Use transactions for multi-step operations
- Choose the right database for your use case
