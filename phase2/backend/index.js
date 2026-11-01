

import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const port = 7001;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello from docker phase 2",
    status: "success",
    project: "Advanced Backend"
  });
});

const server = app.listen(port, "127.0.0.1", () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});

server.on("error", (error) => {
  console.error("Server error:", error.message);
});
