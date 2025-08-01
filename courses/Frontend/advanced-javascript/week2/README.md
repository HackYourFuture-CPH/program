# Callback functions & asynchronous code (Week 2)

This session is about how you in Javascript can assign functions to variables, pass them as arguments, and return them from other functions. You'll learn how to use callback functions to handle asynchronous operations, such as fetching data from a server or responding to user events. 

By understanding the difference between synchronous and asynchronous code, you'll be able to write more efficient and responsive programs which will make for a much better user experience.

## Contents

- [Preparation](./preparation.md)
- [Session Plan](./session-plan.md) (for mentors)
- [Assignment](./assignment.md)

## Session Learning Goals

> [!TIP]
> Learning goals specific to this session. These should be a subset of the module's learning goals, and expanded on in more detail if possible.

By the end of this session, you will be able to:

- [ ] Assign functions to variables
- [ ] Pass functions as arguments
- [ ] Return functions from other functions
- [ ] Call functions inside other functions
- [ ] Distinguish between synchronous and asynchronous code
- [ ] Explain why we need code to run asynchronously sometimes
- [ ] Write and use callback functions
- [ ] Use `setTimeout()` for asynchronous operations
- [ ] Use `addEventListener()`

```js
// Example: Using setTimeout() with a callback function
const callback = () => console.log("Do something later");
setTimeout(callback, 1000);
console.log("Do something now");
```
