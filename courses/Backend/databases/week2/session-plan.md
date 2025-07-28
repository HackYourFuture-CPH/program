# Session Plan - Week 2

- The idea is to build on the previous week's knowledge, focusing on advanced database features and practical applications.
- Use the same task database throughout all examples for consistency
- Use problem-based approach: show issues, guide students to solutions

## Setup DB and start the example API

1. Remember to have the example API running and the task database ready before starting the session.

1. Create a sqlite database called `tasks.db` executing the SQL statements [here](../week1/session-materials/tasks.sql), run the following command in your terminal:

```shell
cd example-app
sqlite3 tasks.db < tasks.sql

npm dev
```

## Aggregate Functions - Reporting

### Scenario: Task Management Dashboard

- Start with business need: "We need reports from our task management system"
- Show inefficient approach: calculating stats in application code
  - Show code in `/tasks-per-user-unoptimized` endpoint
- Introduce SQL aggregates as the better solution
  - <http://localhost:3000/api/stats/tasks-per-user> - Uses COUNT, SUM, GROUP BY
  - <http://localhost:3000/api/stats/status-distribution> - Uses COUNT, GROUP BY

### Key Aggregate Functions examples

- **COUNT**: How many tasks per user?
- **SUM**: Total estimated hours across tasks
- **AVG**: Average completion time
- **MIN/MAX**: Earliest/latest due dates
- **GROUP BY**: Essential for meaningful aggregations

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

### Scenario: Task Transfer Between Users

- Business requirement: "Transfer task ownership between team members"
- Show what happens without transactions: race conditions, data corruption
- Implement proper transaction handling

### Transaction Problems Demo

Send a request to simulate an error an data inconsistency

```shell
curl -X POST http://localhost:3000/api/tasks/1/transfer-unsafe -H "Content-Type: application/json" -d '{"fromUserId": 1, "toUserId": 2, "shouldFail": true}'

{"error":"System failure - task doesn't belong to anyone"}
```

### Benefits of transactions

In database terminology, a transaction is an individual unit of work - something that cannot be broken down into smaller pieces.

Transactions have some properties, which can be remembered using the acronym ACID:

- **Atomicity**: All operations succeed or all fail
- **Consistency**: Database rules are maintained
- **Isolation**: if multiple users access a database, their transactions cannot interfere with each other
- **Durability**: in case of any failure within the database, all data changed by transactions will remain

### Transaction Example

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
