# Advanced Database Features

This session is about understanding more advanced database features through practical examples. We'll use aggregate functions to create business reports, explore database security through hands-on SQL injection demonstrations, and learn about transactions to ensure data integrity. We'll also cover different database types and deployment strategies.

## Contents

- [Preparation](./preparation.md)
- [Session Plan](./session-plan.md) (for mentors)
- [Assignment](./assignment.md)

## Learning Goals

By the end of this session, you will be able to:

- [ ] Use aggregate functions (COUNT, AVG, SUM, MIN, MAX) with GROUP BY for business reporting
- [ ] Identify and prevent SQL injection vulnerabilities in web applications
- [ ] Understand and apply database transactions to ensure data integrity using ACID properties
- [ ] Recognize when to use different types of databases (relational vs NoSQL)
- [ ] Deploy a database application to render.com with proper environment configuration

## Main Topics

### Aggregate Functions for Business Reporting

- Using COUNT, AVG, SUM, MIN, MAX for dashboard statistics
- Comparing inefficient application-level calculations vs efficient SQL aggregations
- Practical examples: tasks per user, task status distribution

### Database Security and SQL Injection

- Hands-on demonstration of SQL injection vulnerabilities
- Data extraction and manipulation through injection attacks
- Security best practices: parameterized queries, input validation, security audits

### Transactions and Data Integrity

- Real-world scenario: transferring task ownership between users
- Demonstrating data corruption without transactions
- ACID properties (Atomicity, Consistency, Isolation, Durability)
- SQL transaction example: `BEGIN TRANSACTION, COMMIT, ROLLBACK`

### Database Types Overview

- When NOT to use relational databases
- NoSQL alternatives and their use cases:
  - **Key-Value Stores (Redis)**
  - **Document Stores (MongoDB)**
  - **Graph Databases (Neo4j)**
  - **Time-Series Databases**

### Database Deployment

- Migrating from local SQLite to PostgreSQL on render.com
- Environment variables for database connections
- Production vs development database considerations
