# Session plan

## Session Materials

- [Database Diagram](assets/database-diagram.jpg) - The diagram of the database to be created in this session
- [Sample Tasks database](assets/tasks.sqlite3) - Pre-created SQLite database with the contents of [this SQL file](assets/session-data.sql)

## Session Outline

1. [Introduction to Databases](#what-is-a-database)
   - Briefly explain what a database is and why we use them.
   - Discuss the importance of databases in modern applications.

2. [Setting Up the Database](#creating-a-database)
   - Guide trainees through creating a new database.
   - Execute the provided SQL file to create tables and insert sample data.
   - Ensure everyone has the same starting point.
   - Introduce key terms: table, row, column, primary key, foreign key.

3. **Basic SQL Operations** (30 minutes)
   - Demonstrate basic SQL commands: SELECT, INSERT, UPDATE, DELETE.
   - Show examples of filtering and sorting data using WHERE, ORDER BY, and LIMIT clauses.
   - Encourage trainees to follow along and execute commands on their own databases.

4. **Hands-On Practice** (30 minutes)
   - Provide a set of SQL queries for trainees to implement based on the sample data.
   - Walk around to assist with any questions or issues.

# What is a database?

A database is an organized collection of structured information, or data, typically stored electronically in a computer system. Think of it as a digital filing cabinet where you can store, retrieve, and manage information efficiently.

## Real-Life Examples

### 1. Personal Use

- **Contact List**: Your phone's contact list is a simple database storing names, phone numbers, and email addresses
- **Photo Library**: Your phone's photo app is a database organizing images by date, location, or album
- **Excel Spreadsheets**: When you track your monthly expenses or create a shopping list, you're essentially using a simple database

### 2. Business Use

- **Inventory Management**: Stores use databases to track products, their quantities, and prices
- **Customer Records**: Businesses maintain databases of customer information, purchase history, and preferences
- **Employee Management**: Companies store employee details, attendance, and payroll information

### 3. Everyday Services

- **Banking Systems**: Your bank uses databases to track your account balance, transactions, and personal information
- **Social Media**: Platforms like Facebook or Instagram store user profiles, posts, and connections
- **Online Shopping**: E-commerce sites use databases to manage product catalogs, customer orders, and shipping information

## What do we gain from using a database?

1. **Organization**: Databases help keep information structured and easy to find
2. **Efficiency**: They allow quick access to specific pieces of information
3. **Data Integrity**: They help maintain accurate and consistent data
4. **Security**: They provide controlled access to sensitive information
5. **Scalability**: They can handle growing amounts of data efficiently
6. **Reliablity**: Data is protected from loss or corruption
7. **Shareability**: Multiple users can access the same data

Think of a database as a well-organized digital library where you can store and retrieve information quickly and efficiently, just like how you might use a filing cabinet or spreadsheet, but with more power and flexibility.

## Databases in Software Architecture

In modern software applications, databases serve as the backbone of data storage and management. Let's look at some common examples:

- Imagine a recipe website where users can share their favorite dishes. The database stores all the recipes, user profiles, comments, and ratings. When someone searches for "chocolate cake," the website queries the database to find all relevant recipes.
- A movie streaming platform uses databases to store information about movies, user watchlists, and viewing history. When you log in, the system retrieves your preferences and watch history from the database to recommend new movies.
- Even a simple blog needs a database to store articles, comments, and user information. Without a database, these applications would be like a library without a catalog system - you might have all the information, but finding and managing it would be extremely difficult.

## Database vs Database Management System

### Real-Life Example: Online Store

Imagine you're running an online store. You need to maintain such data entries like:

- inventory
- orders
- customer information
- and many more.

Now, a customer X makes an order. To process the order, you must update the inventory, check the customer data, update the order status at each way of the process, add order to customer information etc. Seems like a lot of work, doesn't it?

What if that work could be automated and better, validated on the go, so all of the records match each other? This is where **DBMS** comes into the scene!

1. **Without DBMS**: You'd need to manually update spreadsheets for inventory, orders, and customer information
2. **With DBMS**:
   - When someone places an order, the system automatically:
     - Updates inventory
     - Creates an order record
     - Sends confirmation emails
     - Updates customer history
   - All of this happens instantly and accurately

Think of a DBMS as your digital assistant that helps you manage your data efficiently, securely, and reliably, just like how a librarian helps manage a library's collection of books.

## Popular DBMS Options

### 1. [MySQL](https://www.mysql.com/)

- **Often used for**: Web applications, small to medium businesses
- **Why**: Free, reliable, and widely supported
- **Example**: Many WordPress websites use MySQL to store their content

### 2. [PostgreSQL](https://www.postgresql.org/)

- **Often used for**: Complex applications, large datasets
- **Why**: Powerful features, great for complex queries
- **Example**: Instagram uses PostgreSQL to store user data and photos

### 3. [MongoDB](https://www.mongodb.com/)

- **Often used for**: Applications with changing data structures
- **Why**: Flexible, can handle different types of data easily
- **Example**: Many mobile apps use MongoDB for its flexibility

### 4. [SQLite](https://sqlite.org/)

- **Often used for**: Small applications, mobile apps
- **Why**: Lightweight, no setup required
- **Example**: Many mobile apps use SQLite for local storage

Implement the following queries:

1. Select the names and phones of all users;
2. Select the name of the user with `id=10`;
3. Find how many users exist in the database;
4. Select the names of the first 5 users in the database;
5. Select the names of the last 3 users in the database;
6. Sum all the ids in the `user` table;
7. Select all users and order them alphabetically by name;
8. Find all tasks that include `SQL` either on the title or on the description;
9. Find the title of all tasks that the user `Maryrose` is responsible for;
10. Find how many tasks each user is responsible for;
11. Find how many tasks with a `status=Done` each user is responsible for;
