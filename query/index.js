import express from "express";
import cors from "cors";
import connectDB from "./database/index.js";
import axios from "axios";
import Post from "./models/query-module.js";
console.clear();
const app = express();
const PORT = 3002;
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
connectDB();
const handleEvent = async (type, data) => {
  if (type === "PostCreated") {
    const { id, title } = data;
    await Post.create({ _id: id, title });
  }
  if (type === "CommentCreated") {
    const { id, content, postId } = data;
    const post = await Post.findById(postId);
    if (post) {
      post.comments.push({ _id: id, content });
      await post.save();
    }
  }
  console.log("Event Handled", type);
};
app.get("/posts", async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});
app.post("/events", async (req, res) => {
  const { type, data } = req.body;
  handleEvent(type, data);
  res.send({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Query is running on port ${PORT}`);
});
