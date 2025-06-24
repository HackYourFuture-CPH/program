# Recap

## Front end vs back end

Web development spans:

- the front end (stuff that happens in the users' web browsers);
- the back end (stuff that happens on servers that we control).

The front end and the back end communicate via HTTP. The front end makes a request, and the back end answers with a response.

We get to write the software on both sides.

## What happens in the front end

- in the front end:
  - we can only use JavaScript;
  - we can do things like manipulate the web page, or make a request to the server.

## What happens in the back end

- in the back end:
  - the primary goal is to send back a response for each HTTP request;
  - we can use any language we like (but we'll be using JavaScript);
  - we can also do things like read and write files (on the server), or talk to a database, or to another server.

## Data & APIs

TODO

## Deployment

The server is ours to control. It runs the back end code.

It also has a copy of the front end code, so that it can provide it to the front end, for the web browser to run it.

"Deployment" is about making sure that the server has all the code, other files, and settings that it needs.
