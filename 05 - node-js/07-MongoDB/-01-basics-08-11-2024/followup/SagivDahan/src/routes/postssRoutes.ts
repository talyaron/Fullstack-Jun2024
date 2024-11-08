import express from 'express';
import { getPosts } from '../controllers/posts/getPostsCont';
import { addPost } from '../controllers/posts/setPostsCont';
const router = express.Router()

router.post('/add-post', addPost);
router.get('/get-posts', getPosts);

export default router;