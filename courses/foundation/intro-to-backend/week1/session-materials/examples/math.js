import express from "express";
const app = express();

app.get("/", (_request, response) => {
  response.send("Let's do some math!");
});

app.get("/add", (request, response) => {
  console.log("Your query: " + request.query);

  if (!request.query.a && !request.query.b)
    return response.send(`
    <h1> No values to add! </h1>
    Append <code>?a=2&b=3</code> to the url
  `);

  const { a, b } = request.query;
  const sum = Number(a) + Number(b);

  response.send(sum);
});

app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});
