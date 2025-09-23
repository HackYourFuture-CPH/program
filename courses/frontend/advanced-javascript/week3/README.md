# Promises & `async`/`await` (Week 3)

In this session, you'll learn how to write asynchronous code that is both efficient and easy to understand. We'll explore Promises and the `async`/`await` syntax, which allow you to handle long-running operations—such as network requests—without blocking the user interface. Mastering these techniques is key to building responsive applications that deliver a smooth user experience.

## Contents

- [Preparation](./preparation.md)
- [Session Plan](./session-plan.md) (for mentors)
- [Assignment](./assignment.md)

## Session Learning Goals

By the end of this session, you will be able to:

- [ ] Use **Promises** to run asynchronous code.
  - [ ] Understand the anatomy of a Promise and how to use it
  - [ ] Using `.then()` to add callback behaviour
  - [ ] Using `.catch()` to handle errors
  - [ ] Chaining multiple `.then()`
- Use `async` and `await` to make your code more readable
  - [ ] Defining `async` functions
  - [ ] Using `await` when calling `async` functions
  - [ ] Error handling using `await`

```js
// Example: Using promise with .then()
let user1;
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => (user1 = response.json()))
  .then(() => console.log("User 1:", user1))
  .catch(() => (user1 = null));

// Example: Using promise with async/await
async function getUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/2",
    );
    const user = await response.json();
    return user;
  } catch (error) {
    return null;
  }
}
```
