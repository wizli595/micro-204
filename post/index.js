import express from "express";
import connectDB from "./database/index.js";
import postRoutes from "./routes/post-route.js";
import cors from "cors";
console.clear();
connectDB();
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Thats working from POST!!");
});

app.use("/api/posts", postRoutes);
app.post("/events", (req, res) => {
  const event = req.body;
  console.log(event);
  res.send({ status: "OK" });
});

app.listen(3000, () => {
  console.log("Server POST is running on port 3000");
});
