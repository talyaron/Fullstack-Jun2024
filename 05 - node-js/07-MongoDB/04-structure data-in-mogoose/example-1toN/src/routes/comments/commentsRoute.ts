import express from 'express';
import { addComment } from '../../controllers/comments/setComments';

import { getCommentByProductId } from '../../controllers/comments/getComments';


const router = express.Router();

// Get all comments


// Create a new comment
router.post('/add-comment', addComment);
router.get('/get-comment-by-product-id', getCommentByProductId);



export default router;