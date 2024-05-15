import Comment from "../models/comment-model.js";

const getAllCommentsByPost = async (req, res) => {
    const {id:postId}=req.params;
    try {
        const comments = await Comment.find({post:postId});
        res.status(200).send(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const createComment = async (req, res) => {
    const {content}= req.body;
    const {id:postId}= req.params;
    try {
        const newComment = await Comment.create({content,post: postId});
        res.status(201).send(newComment);       
    } catch (err) {
        console.log(err)
    }
}
export { getAllCommentsByPost, createComment};