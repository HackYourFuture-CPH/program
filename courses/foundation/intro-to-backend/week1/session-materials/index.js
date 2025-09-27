import express from "express";
const app = express();

app.get("/", (_request, response) => {
  response.send("hello");
});

app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});
