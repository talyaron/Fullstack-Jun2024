import express from 'express';
import { addComment } from '../../controllers/reviews/setComments';

import { getCommentByProductId } from '../../controllers/reviews/getComments';


const router = express.Router();

// Get all comments


// Create a new comment
router.post('/add-comment', addComment);
router.get('/get-comment-by-product-id', getCommentByProductId);



export default router;