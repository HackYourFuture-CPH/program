# Exercise 1

Navigate to `intro-to-backend` in your [assignment repo](https://github.com/HackYourFuture-CPH/hyf-assignment-template/tree/main/courses/foundation/intro-to-backend) and open it in your code editor, where you'll find some exercises ready to complete.

## Getting started

Let's start by taking a look at `exercise1.js`. Here you'll find a simple webserver with a route already set up on "/".

Run the webserver to see it in action:

```shell
node --watch exercise1.js
```

Go to <http://localhost:3000> in your browser to verify that everything is working as expected. You should see a page that displays the same string being returned in the "/" route function.

Change this string to anything you like, and refresh your browser to see it change.

## The task

Next, you need to implement a new route called `/currentYear`. You can find this function already defined in `exercise1.js`, you just need to implement it! Write some JavaScript to return the current year as a string.

To test if it's working, navigate to your new route in your web browser <http://localhost:3000/currentYear>. You should see the current year displayed there.

Next, set up Postman and create a request to test your `/currentYear` route in a similar way.
