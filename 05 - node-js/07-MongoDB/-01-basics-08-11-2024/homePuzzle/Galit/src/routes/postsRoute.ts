import express from 'express';
import { addPost, getPosts, deletePost, editPost } from '../controller/postsController';

const router = express.Router();

router.post('/add-post', addPost);
router.get('/get-posts', getPosts);
router.delete('/delete-post', deletePost);
router.put('/edit-post', editPost);

export default router;
