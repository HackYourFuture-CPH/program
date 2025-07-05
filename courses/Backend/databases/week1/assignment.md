# Assignment

## Part 1: Working with tasks

Write the following sql queries:

- Add a task with these attributes: `title, description, created, updated, due_date, status_id, user_id`
- Change the title of a task
- Change a task due date
- Change a task status
- Mark a task as complete
- Delete a task

In all the above queries, you choose which is the task that you will modify/delete.

## Part 2: School database

- Create a new database containing the following tables:
  - **Class**: with the columns: id, name, begins (date), ends (date)
  - **Student**: with the columns: id, name, email, phone, class_id (foreign key)
- If you are done with the above tasks, you can continue with these advanced tasks:
  - Create an index on the name column of the student table.
  - Add a new column to the class table named **status** which can only have the following values: not-started, ongoing, finished (hint: enumerations).

## Part 3: More queries

You should do these queries on the database `hyf_lesson2`, which we created last class.
You can find the data [here](lesson2-data.sql) if you need to create the DB again.

- Get all the tasks assigned to users whose email ends in `@spotify.com`
- Get all the tasks for 'Donald Duck' with status 'Not started'
- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: `month(created)=month_number`)
- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)

## Part 4: Creating a database

Using an entity relationship diagram, design the data model for an application of your choice. This can be anything, previous students have used a small business (with staff, offices, and job titles), a library (with books, genres, racks, members, and a borrowing log), or a farm (with animals, barns, and farmers).

Your application must include at least one many-to-many relationship and any supporting tables (linking tables) that are needed. The entity relationship diagram must describe what tables you will need, the columns in these tables, which column is the primary key, and the relationships between tables.

Next, using the entity relationship diagram as a starting point, write all the necessary `CREATE TABLE` statements to create all tables and relationships (foreign key constraints) for this data model.

Submit an image or PDF of your entity relationship diagram, and a `.sql` file with the `CREATE TABLE` statements.

### Hand in assignment

Need to brush up on the homework hand-in process?

Check [this resource](https://github.com/HackYourFuture-CPH/Git/blob/main/homework-submission.md) to remember how to hand in the homework correctly!
