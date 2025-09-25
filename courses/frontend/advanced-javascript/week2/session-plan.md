# Session Plan

## Session Materials

<!-- Previously used slides, docs or any other materials that future mentors could get value from should be listed here. If we don't have any (yet), this section can be removed. -->

These are some examples of previously created materials by mentors that you can use yourself, or for inspiration.

- [Notion Page Handout](https://dandy-birth-1b2.notion.site/HYF-Aarhus-JS-2-Week-3-6bce73b3a0bf47a3ad32ed12ee4d0519?pvs=4) (by [Thomas](https://github.com/te-online))

## Session Outline

<!-- Write a plan for the order of topics, points to cover, examples, timings, exercises and any other useful info to guide the session. -->

- Function as a variable - function can be called inside another function, like we saw with the homemade `forEach`
  - [Code inspiration](#calling-a-function-within-a-function)
- Callback function and asynchronicity - shows a practical example of function that gets called by another function (e.g. `setTimeout` or `addEventListener`)
  - [Code inspiration](#callback-functions)
- [Exercise 1](#1-click-counter), [exercises 2](#2-delay-clicker), [exercise 3](#3-page-onload), [exercises 4](#4-mouse-position)

The trainees should after the session **feel comfortable with callback functions** and the fact that a **function works just like a variable** that can be passed around. Also asynchronicity is important, when is a function called and where does it stop.

Also hammer in the point of the difference between:

```js
document.querySelector("button").addEventListener("click", logOuttext);
document.querySelector("button").addEventListener("click", logOuttext());
```

Here's a good [practical example of callbacks](https://github.com/HackYourFuture-CPH/JavaScript/blob/class08/JavaScript2/Week5/classwork/extra_examples.md) (TODO move this to this repo)

This is super good at explaining function logic
![Function graphic](./session-materials/function-graphic.jpg)

### Calling a function within a function

```js
// Here we create a function that as a parameter takes a function!! Super weird right!?
// Functions works just like any other type in js.
function functionRunner(functionToRun) {
  console.log(typeof functionToRun);
  // Here we are calling the function that is provided as an argument when calling functionRunner
  functionToRun();
}

functionRunner(function () {
  console.log("hello");
});

// We don't see anything, why??
functionRunner(Math.random);

// Let's rewrite functionRunner to log out the return of a function
function functionRunnerImproved(functionToRun) {
  console.log(typeof functionToRun);
  // Here we are calling the function that is provided as an argument when calling functionRunner
  const capturedReturnValue = functionToRun();
  console.log(capturedReturnValue);
}

functionRunnerImproved(Math.random);
```

### Callback functions

```js
/*
Events
Events in javascript are thing like:
A timer has just finished, a user clicked a button, our page has loaded,
someone types into an input element or we have just gotten some data from a server.
When these events happen, we usually want to add some functionality.
e.g. when a user clicks the like button (event), we want to increment the like counter and color the like button blue.
Or when someone clicks "Close cookies" (event) we want to remove the cookie div.
Let's first try to create some js that waits for 2 seconds and the console.logs out "2 seconds has elapsed!"
In javascript we use the word eventlistener to listen
*/

// Tried to find actual webkit implementation, but failed. To show that the setTimeout implementation is just calling the provided function after a given time
setTimeout(function () {
  console.log("2 seconds has elapsed!");
}, 2000);

// Cool, now let's make a function as a variable:
const fourSecondLog = function () {
  console.log("4 seconds has elapsed!");
};

setTimeout(fourSecondLog, 4000);
```

### Event Listeners

```javascript
// Now let's keep track of how many times a button is clicked.
// To do something whenever a button gets clicked, we use what is called an event listener.
// Imagine that the button is noisy. There's someone listening out for the click sound,
// and every time they hear it, they add 1 to a counter.

const buttonElement = document.querySelector("button");
let counter = 0;

buttonElement.addEventListener("click", function () {
  counter = counter + 1;
  console.log(`Button clicked ${counter} times so far`);
});

// or the same thing but assigning the event listener to a const:

const buttonElement = document.querySelector("button");
let counter = 0;

const buttonClicked = function () {
  counter = counter + 1;
  console.log(`Button clicked ${counter} times so far`);
};

buttonElement.addEventListener("click", buttonClicked);

//Callbacks
// Now let's learn about callbacks!
// Well actually you have already made callbacks!
// When you give a function to an event listener or a timer or when fetching data you are using a callback function

// Let's create a callback function when someone writes in a input element
const callback = function () {
  console.log("Someone is writing!!");
};

document.querySelector("input").addEventListener("input", callback);
```

### Anonymous vs named function

```js
// Named function
function myFunction() {
  console.log("myFunction");
}

// Anonymous function, assigned to a variable
const myFunctionAsVar = function () {
  console.log("myFunctionAsVar");
};

document.body.addEventListener("click", myFunctionAsVar);
document.body.addEventListener("click", myFunction);
```

## Exercises

<!-- Exercises might appear inside the Session Outline section if they are tightly integrated into the flow of the session. If you have more like a library of exercises that should be worked through in order, then you could also list them in a separate section here. -->

### 1. Click counter

Create an `index.html` file with two buttons:

- When the button first is clicked it should first log out 0. The next time it is clicked it should log out 1, etc.
- Clicking the second button should also count up and logout the same variable.

### 2. Delay clicker

Create a button in html with the text "Log in 3 seconds"

- When the button is clicked it should wait 3 seconds and then log the text "This text was delayed by 3 seconds".

### 3. Page onload

First create a callback function as a variable that logs this out: "DOM fully loaded and parsed"
This callback function should be called when the DOM is fully loaded.
To find what this function is called go to google! What should we search for???

### 4. Mouse position

Create a handler, that prints the x,y coordinate of the mouse event.

#### 5. Mouse position online tool

Say we want to create an online tool where businesses can see where their users' mouse is most of the time. Businesses can now figure out if they have designed their website correctly.

Let's create some js that will get the average `x` and `y` position of a user after 30 seconds.

> [!TIP]
> Before starting with this exercise, create a plan for how you will implement this! Maybe together with your mentor.
