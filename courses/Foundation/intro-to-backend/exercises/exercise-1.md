# Exercise 1

Navigate to `intro-to-backend` in your assignment repo and open it in your code editor, where you'll find some exercises ready to complete.

## Getting started
Let's start by taking a look at `exercise1.js`. Here you'll find a simple webserver with a route already set up on "/". 

Run your webserver to see it in action:

```shell
nodemon exercise1.js
```

Go to <http://localhost:3000> in your browser to verify that everything is working as expected. You should see a page that displays the string being returned in the "/" route function.

Change this string to anything you like, and refresh your browser to see it change.

## The task

Next, you need to implement a new route called `/currentYear`. You can find this function defined in `exercise1.js` already, you just need to implement it! Write some JavaScript to return the current year as a string.

To test if it's working, navigate to your new route in your web browser <http://localhost:3000/currentYear>. You should see the current year displayed there.
