// postsRoute.ts

import express from 'express';
import { addPost, getPosts, updatePost, deletePost } from '../controller/postsController';


const router = express.Router()

router.post('/api/add-post', addPost);
router.get('/api/get-posts', getPosts);
router.put('/api/update-post/:index', updatePost);
router.delete('/api/delete-post/:index', deletePost);

export default router;
