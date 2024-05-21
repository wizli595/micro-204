import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  },
  { timestamps: true, versionKey: false }
);

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    comments: [commentSchema],
  },
  { timestamps: true, versionKey: false }
);
const Post = mongoose.model("Post", postSchema);
export default Post;
