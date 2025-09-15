import express from "express";
const router = express.Router();

router.get("/", async (_request, response) => {
  response.send({ data: "from app.use" });
});

export default router;
