import express from 'express';
import { addComment } from '../../controllers/comments/setComments';


const router = express.Router();

// Get all comments


// Create a new comment
router.post('/add-comment', addComment);



export default router;