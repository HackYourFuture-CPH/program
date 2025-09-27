# Session Plan

## Session Materials

<!-- Previously used slides, docs or any other materials that future mentors could get value from should be listed here. If we don't have any (yet), this section can be removed. -->

<!-- These are some examples of previously created materials by mentors that you can use yourself, or for inspiration.

- [`Resource Name`, `@author`, `Team X`](https://example.com/)
-->

## Session Outline

<!-- Write a plan for the order of topics, points to cover, examples, timings, exercises and any other useful info to guide the session. -->

Start VERY simple. Just a class that has few fields, no methods. Explain the diff from object to class. Explain instance etc. When they get that move on to class methods. **Only teach extends if they really are on top of things** otherwise just get them comfortable with classes :) if you can repeat a bit of promise, maybe when working with class that would be great.

- Constructor
  - [Code inspiration](#constructor)
  - [Exercise](#1-create-a-user-class)
- Instance
  - [Code inspiration](#instance)
  - [Exercise](#2-create-an-instance-of-the-class)
- Methods
  - [Code inspiration](#methods)
  - [Exercise](#3-create-a-class-method)
- `this`
  - Refers to the instance of the class. Do go into too much detail and edge cases. Avoid mentioning `bind`, `apply`, etc unless you find it super important, the trainees will just forget it anyway!
- [Exercise](#4-creating-a-cv-class)
- Extend (Only if time!)

### Constructor

```js
class Comment {
  constructor(username, content, time) {
    this.username = username;
    this.content = content;
    this.time = time;
  }
}
```

### Instance

```js
const comment1 = new Comment("test", "post", new Date());
```

### Methods

```js
class Comment {
  constructor(username, content, time) {
    this.username = username;
    this.content = content;
    this.time = time;
  }

  // Get help from trainees to write this method!
  getTimeSincePost() {
    return new Date().getTime() - this.time.getTime();
  }

  // Get help from trainees to write this method!
  hasSwearWord() {
    const swearWords = ["crap", "damn"];
    const postWords = this.content.split(" ");
    const hasSwearWord = swearWords.find((swearWord) =>
      postWords.includes(swearWord),
    );

    return Boolean(hasSwearWord);
  }
}

const comment1 = new Comment("test", "post", new Date());

console.log(comment1.hasSwearWord());
comment1.content = "shit crap";
console.log(comment1.hasSwearWord());
setTimeout(() => {
  console.log(comment1.getTimeSincePost());
}, 1000);

// data
// username, content, time

// functionality
// getTimeSincePost, hasSwearWord
```

### Class post

```js
class Post {
  // setup
  constructor(username, content, postTime, likes, comments, shares) {
    this.username = username;
    this.content = content;
    this.postTime = postTime;
    this.likes = likes;
    this.comments = comments;
    this.shares = shares;
  }

  addLike(username, time) {
    const like = {
      username: username,
      time: time,
    };

    this.likes.push(like);
  }

  addComment(username, content, time) {
    this.comments.push(new Comment(username, content, time));
  }

  doShare() {}

  save() {}

  logThis() {
    console.log(this.username);
  }
}

const post1 = new Post("benna100", "asd", "10/02/1019", [], [], []);
const post2 = new Post("habsdhjd", "asdajhdb", "10/02/1019", [], [], []);

post1.addLike("bennaasdasd", "14:07");
console.log(post1.likes);

post1.addComment("ugg", "Great post", "14:16");
console.log(post1.comments);

post1.logThis();
post2.logThis();
```

## Exercises

<!-- Exercises might appear inside the Session Outline section if they are tightly integrated into the flow of the session. If you have more like a library of exercises that should be worked through in order, then you could also list them in a separate section here. -->

### 1. Create a user class

The class should have 2 properties: firstName and lastName. Hint: Use `this` and `constructor`.

### 2. Create an instance of the class

Use the `new` keyword and assign the instance in a variable.

- Try to log out the instance of the `User` to the console.
- Try to log out the users `firstName`

### 3. Create a class method

The method should be called `getFullName`, and should return the combined first name and last name of the user. Use string concatenation or template literals. Remember to use the `this` keyword to access the attributes on the class instance.

Call the `getFullName` method and log the result to the console.

### 4. Creating a CV class

The CV that we will be making uses three classes: `Job`, `Education` and
`CV`. The `CV` class we have made for you (with some missing functionality). The `Job` and `Education` classes you need to create.

#### Part 1

Create the classes `Job` and `Education`.

- `Job` has five properties: `id`, `title`, `description`, `startDate` and `endDate` (the dates can be strings or actual `Date` objects).
- `Education` has six properties: `id`, `title`, `school`, `address`, `startDate` and `endDate`.

```js
class Job {
  ///...
}

class Education {
  ///...
}
```

#### Part 2

Now add the functionality for the methods in the `CV` class.

_Remember_: jobs and educations are just arrays of class instances. So use your array manipulation knowledge for the add and remove methods.

```js
class CV {
  constructor(email) {
    this.jobs = [];
    this.educations = [];
    //this.email = ?
  }

  addJob(job) {
    // add functionality here
  }

  removeJob(job) {
    // add functionality here
  }

  addEducation(education) {
    // add functionality here
  }

  removeEducation(education) {
    // add functionality here
  }
}
```

#### Part 3

1. Create a new `CV` instance using the `new` keyword, and save it in a variable called `myCV`.

2. Apply the methods you have created on the `myCV` object. Create a few `Job` and `Education` objects and add them to your CV.

3. Remove a job and an education from `myCV`.

4. Log `myCV` to the console, again, and check that the objects were removed correctly.

#### Part 4

Add a method to the `CV` class called `renderCV()`. This method should render out the CV using HTML. Use `document.getElementById("<id>")` and `document.createElement("<element>")`, as well as `element.appendChild(<element>)` to build your HTML using JavaScript.
