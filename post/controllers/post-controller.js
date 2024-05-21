import Post from "../models/post-model.js";
import axios from "axios";
/**
 * @description Get all posts
 * @param {*} req
 * @param {*} res
 * @returns {Promise<void>}
 * @example GET /posts
 */
const getAllPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).send(posts);
};

const createPost = async (req, res) => {
  const { title } = req.body;
  try {
    const post = await Post.create({ title });
    // Emit an event
    axios.post("http://localhost:3005/events", {
      type: "PostCreated",
      data: {
        id: post._id,
        title: post.title,
      },
    });

    res.status(201).send(post);
  } catch (err) {
    console.log(err);
  }
};

export { getAllPosts, createPost };
