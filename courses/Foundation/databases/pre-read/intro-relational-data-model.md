# Relational Data Model

## Table of Contents

1. [What is a Relational Data Model?](#what-is-a-relational-data-model)
2. [The Basics: Tables and Relations](#the-basics-tables-and-relations)
3. [Types of Relationships](#types-of-relationships)
   - [One-to-One (1:1)](#1-one-to-one-11)
   - [One-to-Many (1:N)](#2-one-to-many-1n)
   - [Many-to-Many (N:M)](#3-many-to-many-nm)
4. [How Relationships Work: Keys and Connections](#how-relationships-work-keys-and-connections)
   - [Primary Keys](#primary-keys)
   - [Foreign Keys](#foreign-keys)
   - [Why Many-to-Many Needs a Helper Table](#why-many-to-many-needs-a-helper-table)
5. [Why Choose Relational Databases?](#why-choose-relational-databases)
6. [Key concepts](#key-concepts)
7. [Real-life example](#real-world-example-online-bookstore)


## What is a Relational Data Model?

Imagine you're organizing a library. Instead of throwing all books in one big pile, you organize them into different sections (like Fiction, Science, History) and give each book a unique ID. That's essentially what a relational data model does with data!

## The Basics: Tables and Relations

A relational database organizes data into **tables** (like spreadsheets) where:
- Each **row** represents one item (like one book)
- Each **column** represents a property (like title, author, year)
- Tables can be connected through **relationships**

## Types of Relationships

### 1. One-to-One (1:1)
- One item in Table A connects to exactly one item in Table B
- **Example**: A person and their passport number
  - Each person has one passport
  - Each passport belongs to one person

### 2. One-to-Many (1:N)
- One item in Table A can connect to many items in Table B
- **Example**: A teacher and their students
  - One teacher can have many students
  - Each student has one main teacher

### 3. Many-to-Many (N:M)
- Many items in Table A can connect to many items in Table B
- **Example**: Students and courses
  - One student can take many courses
  - One course can have many students

## How Relationships Work: Keys and Connections

Think of a relational database like a well-organized library where each book has a unique ID number (like a library card number). This is what we call a **Primary Key** - it's like a unique identifier that helps us find exactly what we're looking for.

### Primary Keys
- Like a student ID number - unique to each student
- Like a book's ISBN - no two books have the same ISBN
- Like your social security number - uniquely identifies you

### Foreign Keys
A **Foreign Key** is like a reference to another table's primary key. It's like having a note that says "see Book #123" in your library catalog.

**Example**: In a school database:
- The `Students` table has a primary key `student_id`
- The `Classes` table has a primary key `class_id`
- The `Enrollments` table has foreign keys `student_id` and `class_id` to connect students to their classes

### Why Many-to-Many Needs a Helper Table

Imagine you're organizing a school dance where students can attend multiple dances, and each dance can have multiple students. You can't just put this information in either the Students table or the Dances table because:
- A student might go to many dances
- A dance might have many students

This is where a helper table (sometimes called a junction table) comes in:
The helper table (let's call it `Student_Dances`) solves this problem by creating a unique connection between each student and each dance they attend. It's like having a sign-in sheet at the dance where:

- Each row in the helper table represents one student attending one specific dance
- If John attends Dance #1 and Dance #2, he'll have two separate rows in the helper table
- If Dance #1 has 50 students, it'll have 50 separate rows in the helper table

This way, we can easily:
- See which students are going to which dances
- Add new students to dances
- Remove students from dances
- Count how many students are attending each dance

Without this helper table, we'd have to either:
- Put a list of all dances in each student's record (which would be messy and inefficient)
- Or put a list of all students in each dance's record (which would also be messy and inefficient)

The helper table keeps everything clean and organized, just like a proper sign-in sheet at a real dance!


## Why Choose Relational Databases?

### Advantages
- **Data Integrity**: Like having a strict librarian who ensures all books are properly cataloged
- **Consistency**: Rules ensure data stays accurate and reliable
- **Flexibility**: Easy to modify and expand
- **Powerful Queries**: Can find complex relationships between data

### Compared to Non-Relational (NoSQL)
| Feature | Relational | Non-Relational |
|---------|------------|----------------|
| Structure | Fixed, table-based | Flexible, document-based |
| Best for | Complex relationships | Simple, fast data |
| Example | Banking systems | Social media feeds |

## Key Concepts

### 1. Atomicity
- Data is broken down into smallest meaningful pieces
- **Example**: Instead of "John Smith", store "John" and "Smith" separately

### 2. Uniqueness
- Each record has a unique identifier (like a book's ISBN)
- **Example**: Student ID numbers

### 3. Referential Integrity
- Ensures relationships between tables remain valid
- **Example**: Can't delete a teacher if they still have students

### 4. Normalization
- Organizing data to minimize redundancy
- **Example**: Instead of repeating customer details in every order, store them once and reference them

## Real-World Example: Online Bookstore

Let's explore how a relational database might be structured for an online bookstore. This example will demonstrate how different tables relate to each other and how data is organized efficiently.

### Database Structure
### Tables and Their Relationships

1. **Books**
   - book_id (Primary Key)
   - title
   - isbn
   - price
   - publication_date
   - publisher_id (Foreign Key → Publishers)
   - category_id (Foreign Key → Categories)

2. **Authors**
   - author_id (Primary Key)
   - first_name
   - last_name
   - biography

3. **Book_Authors** (Junction Table)
   - book_id (Foreign Key → Books)
   - author_id (Foreign Key → Authors)

4. **Publishers**
   - publisher_id (Primary Key)
   - name
   - address
   - contact_info

5. **Categories**
   - category_id (Primary Key)
   - name
   - description

6. **Customers**
   - customer_id (Primary Key)
   - first_name
   - last_name
   - email
   - address
   - phone

7. **Orders**
   - order_id (Primary Key)
   - customer_id (Foreign Key → Customers)
   - order_date
   - total_amount
   - status

8. **Order_Items**
   - order_item_id (Primary Key)
   - order_id (Foreign Key → Orders)
   - book_id (Foreign Key → Books)
   - quantity
   - price_at_time

### Relationships
- Books ←→ Authors (Many-to-Many through Book_Authors)
- Books → Publishers (Many-to-One)
- Books → Categories (Many-to-One)
- Customers → Orders (One-to-Many)
- Orders → Order_Items (One-to-Many)
- Order_Items → Books (Many-to-One)

### Bookstore diagram
This diagram visualises the list above. We will get into intricacies of diagram reading and making in the [next section](./intro-diagram-making-and-reading.md).

![Diagram showcasing the Bookstore database. Created using Mermaid diagrams](./assets/bookstore.png)
_created using [Mermaid](https://www.mermaidchart.com/play#pako:eNqtVMtOwzAQ_BUr9_xAbzwKQiCoUA8cIlnbZNusSOxgb4RK4d_Jq2nsuBUHeqnqGXtndnd6iFKdYbSI4jhOVKrVlnaLRAnBOZa4EAprNlAkqsPR3BLsDJQtQ4hrrd-tOPQ_2s_D83p5v3wVmwaQlInV4wlbL9_WgokL9M7IbtTp6HV59SQqQ6lPq-pNQSkwaSUzYJxX7Rg2R9OWvnucE5rbuNNmP8V_-q-rmnNtgmagg4J2tmQsSwWlL7aA8PmGdNO-Kt87xds-ygsKju0MeTqp8xytjt0IPun0auYroByyzKC13mmzMAwpS1Jb7VS_6VtNGKw-HcRfimdoU0NVO3u3Sm1Zl2cspgP4P5PDEqj4U0-qXCt0ZL6Y7IxG3SK-wJCBO99Af9MNQpcd1gyFhFLXir07loFrO5cmHxjLS_oa-JzI0UFoOS8t7kcNqvk72IeiL4ElU4mzlFjx_R3H-uBGZiGSKAebRG6Wz1E_TWNoZE9yMrnQM48pGcmTtZ6Rh6Wmrwl93M-BPWxC93YB6Yk5AFPaMJXu6TZmpEa20wqf3E0EM0GqpUc_vzO-wkA)_