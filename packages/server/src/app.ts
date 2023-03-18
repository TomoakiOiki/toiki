import express from "express";
import { json } from "body-parser";

const app = express();

app.use(json());

const port = process.env.PORT || 8888;

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export { app };
