// postsRoute.ts

import express from 'express';
import { addPost, getPosts, updatePost, deletePost } from '../controller/postsController';


const router = express.Router();

router.post('/add-post', addPost);
router.get('/get-posts', getPosts);
router.put('/update-post', updatePost);
router.delete('/delete-post', deletePost);

export default router;
