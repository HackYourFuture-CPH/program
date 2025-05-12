# Lesson 3: Security and Non-Relational Databases

In the final week, the students will be introduced to SQL injections and common security practices around MySQL permissions. MongoDB, as an example of a non-relational database, will also be introduced, as well as the benefits and drawbacks of relational and non-relational models.

Objective: the students should know how SQL injections happen, and how to define user permissions in MySQL to limit the potential damage that can be done with a SQL injection. The students should also be able to compare and contrast relational (like MySQL) and NoSQL databases (considering their benefits and drawbacks).

## Pre-Class Readings

Please read the following pages that explains the ACID database model:

- [ACID Properties with real life examples](https://medium.com/%40tushar.rooks/acid-properties-with-real-life-examples-b83a37667338)
- [Why you should never use MongoDB](http://www.sarahmei.com/blog/2013/11/11/why-you-should-never-use-mongodb) <!-- no-https -->

Also the students should watch this video: <https://youtu.be/HSt4nlUIF-A>

## Main Topics

- Security
  - SQL Injection
  - User GRANTS
- Introduction to non-relational data with MongoDB
  - MongoDB vs. SQL
  - Create/Drop database
  - Insert/Update/Delete data
  - Query data
  - Relationships: embedded vs. referenced
  - Replication and sharding
  - Atomicity
- [Advanced database schema exercise](social_media_exercise.md)

## Reference Material

- [OWASP on SQL Injection](https://owasp.org/www-community/attacks/SQL_Injection)
- [Parameter Validation on Wikipedia](https://en.wikipedia.org/wiki/Parameter_validation)
- [Node MySQL Escaping Query Values](https://github.com/mysqljs/mysql#escaping-query-values)
- [Node MySQL Preparing Queries (automatic escaping)](https://github.com/mysqljs/mysql#preparing-queries)
- [MySQL SHOW GRANTS](https://dev.mysql.com/doc/refman/8.0/en/show-grants.html)

## Homework

### Start the homework

Need to brush up on the homework setup process? Check [this](https://github.com/HackYourFuture-CPH/Git/blob/main/homework-submission.md) out before you get into some git confusion!

### The task

For the homework this week we will create the database and queries for an application we will continue working on in the [node js class](https://github.com/HackYourFuture-CPH/node.js).

For those who haven't finished this part of the homework last week, now it's the time to finish :)

The application will be a meal sharing website, where users can book a reservation at a meal another user has created.

So as a user you can both

- Create a new meal for people to join
- Book a reservation at a meal

It will be kind of similar to this website: <https://www.mealsharing.com/>

#### Data model

Lets first start with creating the data model.

Create all the sql for creating this data model: <https://dbdiagram.io/d/5f0460690425da461f045a29>

#### Queries

Create these queries

#### Meal

| Queries to write                                                                              |
| --------------------------------------------------------------------------------------------- |
| Get all meals                                                                                 |
| Add a new meal                                                                                |
| Get a meal with any id, e.g. 1                                                                |
| Update a meal with any id, e.g. 1. Update any attribute e.g. the title or multiple attributes |
| Delete a meal with any id, e.g. 1                                                             |

#### Reservation

| Queries to write                                                                                     |
| ---------------------------------------------------------------------------------------------------- |
| Get all reservations                                                                                 |
| Add a new reservation                                                                                |
| Get a reservation with any id, e.g. 1                                                                |
| Update a reservation with any id, e.g. 1. Update any attribute e.g. the title or multiple attributes |
| Delete a reservation with any id, e.g. 1                                                             |

#### Review

| Queries to write                                                                                |
| ----------------------------------------------------------------------------------------------- |
| Get all reviews                                                                                 |
| Add a new review                                                                                |
| Get a review with any id, e.g. 1                                                                |
| Update a review with any id, e.g. 1. Update any attribute e.g. the title or multiple attributes |
| Delete a review with any id, e.g. 1                                                             |

#### Additional queries

Now add a couple of different meals, reservations and reviews with different attributes. With those meals create the following queries

| Functionality                                                                                                  |
| -------------------------------------------------------------------------------------------------------------- |
| Get meals that has a price smaller than a specific price e.g. 90                                               |
| Get meals that still has available reservations                                                                |
| Get meals that partially match a title. `Rød grød med` will match the meal with the title `Rød grød med fløde` |
| Get meals that has been created between two dates                                                              |
| Get only specific number of meals e.g. return only 5 meals                                                     |
| Get the meals that have good reviews                                                                           |
| Get reservations for a specific meal sorted by created_date                                                    |
| Sort all meals by average number of stars in the reviews                                                       |

### Hand in homework

Need to brush up on the homework hand-in process?

Check [this resource](https://github.com/HackYourFuture-CPH/Git/blob/main/homework-submission.md) to remember how to hand in the homework correctly!

### Feedback

And finally, please take two minutes to answer the survey [here](https://forms.gle/rDdPxPGW4piDuktLA) to give feedback to the staff and mentors.
