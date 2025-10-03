import express from "express";
import router from "./examples/router.js";

const app = express();

app.get("/", (_req, res) => {
  res.send({ data: "from app.get" });
});

app.use("/use", router);

app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});
