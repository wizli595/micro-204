import Post from '../models/post-model.js'

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
}

const createPost = async (req, res) => {
    const {title} =req.body;
    try {
        const post = await Post.create({title});
        res.status(201).send(post);
    }catch(err){
        console.log(err)
    }
}

export {
    getAllPosts,
    createPost
}