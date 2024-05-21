import express from "express";
import connectDB from "./database/index.js";
import commentRouter from "./routes/comment-route.js";
import cors from "cors";
console.clear();
connectDB();
const app = express();
const PORT = 3001;
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Thats working from COMMENTS!!");
});

app.use("/api/posts", commentRouter);
app.post("/events", (req, res) => {
  const event = req.body;
  console.log(event);
  res.send({ status: "OK" });
});

app.listen(PORT, () => {
  console.log("Server COMMENTS is running on port 3001");
});
