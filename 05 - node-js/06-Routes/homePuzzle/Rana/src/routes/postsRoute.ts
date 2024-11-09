// postsRoute.ts

import { Router } from 'express';
import { addPost, getPosts, updatePost, deletePost } from '../controller/postsController';

const router = Router();

router.post('/api/add-post', addPost);
router.get('/api/get-posts', getPosts);
router.put('/api/update-post/:index', updatePost);
router.delete('/api/delete-post/:index', deletePost);

export default router;
