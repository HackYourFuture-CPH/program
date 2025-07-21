# Assignment

TODO
The legacy assignments are related to meal sharing and sql injection, which are out of scope here. We need to come up with new ones.

Current suggestions (not decided):

1. Add some further basic endpoints to the simple web server they started in the session
2. Practice using Postman to create working requests for some public api (each request increasing in complexity)

## 1. Extend your webserver

In the session, you added plenty of useful routes to your API, but let's not stop there!

1. Think of 3 new useful routes yourself, and implement them.

2. Extend the home route.
    Routes don't only have to return text or JSON, they can also return HTML content to be displayed in the browser. 
    
    Update the `/` route to return a HTML page that fetches the count value from the `/user-count` route you've implemented previously. Style the HTML so it displays in a visually pleasing way. Now you've created a nice page to view the total number of users in your database!
