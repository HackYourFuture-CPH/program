## Learning Goals

- **Functions as First-Class Citizens**: Use functions like any other value.
  - Assign functions to variables
  - Pass functions as arguments
  - Return functions from other functions
  - Call functions inside other functions
- **Asynchronous Code**:
  - Distinguish between synchronous and asynchronous code
- **Callback Functions**: Learn how and when to use callback functions.
  - Write and use callback functions
  - Use `setTimeout()` for asynchronous operations
  - Use `addEventListener()`

```js
// Example: Using setTimeout() with a callback function
const callback = () => console.log("Do something later");
setTimeout(callback, 1000);
console.log("Do something now");
```

## Preparation

> [!IMPORTANT]
> Review the following materials before class

- 📽️ [JavaScript Callback Functions](https://www.youtube.com/watch?v=pTbSfCT42_M) (15 min)
- 📖 [Asynchronous vs. Synchronous Programming](http://www.hongkiat.com/blog/synchronous-asynchronous-javascript/) (10 min)
- 📖 [setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp) (5 min)
- 📖 [addEventListener()](https://www.w3schools.com/jsref/met_element_addeventlistener.asp) (10 min)
- 📽️ [HYF - JavaScript Callbacks](https://youtu.be/hjgunSqSPaA) (20 min)
- 📽️ [HYF - Working with Asynchronous Code in JavaScript](https://youtu.be/RTrua6CRNEM) (10 min)