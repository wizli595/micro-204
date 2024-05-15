import {Router} from 'express'
import * as postController from '../controllers/post-controller.js'

const router = Router();


router.route('/')
    .get(postController.getAllPosts)
    .post(postController.createPost);

export default router;