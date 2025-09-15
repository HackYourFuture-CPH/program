import express from "express";
const app = express();

app.get("/data", (_req, res) => {
  res.send({ data: 1 });
});

app.get("/data", (_req, res) => {
  res.send({ data: 2 });
});

////// which one is being called when?

app.get("/data/:id", (req, res) => {
  console.log("Parametrized URL");
  res.send({ data: req.params });
});

app.get("/data/overview", (req, res) => {
  console.log("Overview");
  res.send({ data: req.params });
});

app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});
