import {Router} from 'express'
import * as commentController from '../controllers/comment-controller.js'
 const router = Router();


router.route('/:id/comments')
    .get(commentController.getAllCommentsByPost)
router.route('/:id/comments').post(commentController.createComment);
 export default router;