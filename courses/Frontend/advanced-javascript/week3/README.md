## Learning Goals

- **Promises**: Learn to use Promises to run asynchronous code.
  - Understand the anatomy and use of a Promise
  - Using `.then()` to add callback behaviour
  - Using `.catch()` to handle errors
  - Chaining multiple `.then()`
- **async & await**: Learn to use `async` and `await` to make your code more readable
  - Defining `async` functions
  - Using `await` when calling `async` functions
  - Error handling using `await`

```js
// Example: Using promise with .then()
let user1;
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => user1 = response.json())
  .then(() => console.log("User 1:", user1))
  .catch(() => user1 = null);


// Example: Using promise with async/await 
async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
    const user = await response.json();
    return user;
  }
  catch(error) {
    return null;
  }
}
const user2 = getUser2();
```

## Preparation

> [!IMPORTANT]
> Review the following materials before class



### Promises
- 📖 [A cartoon explaining promises](https://fullstackjournal.wordpress.com/2018/07/06/the-promise-js-explained-i-burger-party/) (10 min)
- 📖 [Guide to Promises](https://javascript.info/async) (Step 2-4) (60 min)
- 📽️ [Async JavaScript tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu) - focus on the following:
    - [Callback Hell](https://www.youtube.com/watch?v=EQem2gugonA&list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu&index=6&ab_channel=NetNinja) (5 min)
    - [Promises](https://www.youtube.com/watch?v=a_8nrslImo4&list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu&index=7&ab_channel=NetNinja) (10 min)
    - [Chaining Promises](https://www.youtube.com/watch?v=GfVMKkUk2Uo&list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu&index=8&ab_channel=NetNinja) (5 min)
    - [The Fetch API](https://www.youtube.com/watch?v=drK6mdA9d_M&list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu&index=9&ab_channel=NetNinja) (10 min)

Optionally:
- 📽️ [Promises practical examples using Javascript](https://youtu.be/o_m4clbtzeI)
- 📽️ [Creating a promise using Javascript](https://youtu.be/qapwmq5UA6Y)
- 📽️ [Consuming/using promises using Javascript](https://youtu.be/G4YSi6VA2gw)

### async / await

- 📽️ [Async JavaScript tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu) - focus on the following:
    - [Async & Await](https://www.youtube.com/watch?v=CWjNefiE47Y&list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu&index=10&ab_channel=NetNinja) (10 min)
    - [Throwing Errors](https://www.youtube.com/watch?v=AoBSB00vW5A&list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu&index=11&ab_channel=NetNinja) (5 min)
- 📽️ [Async crash course](https://www.youtube.com/watch?v=PoRJizFvM7s) (25 mins)
- 📖 [async/await](https://javascript.info/async-await) (15 min)

Optionally:
- 📽️ [Working with async/await using Javascript](https://youtu.be/6Hq6AywZ7FY)

![You can do it!](https://media.giphy.com/media/yoJC2K6rCzwNY2EngA/giphy.gif)


