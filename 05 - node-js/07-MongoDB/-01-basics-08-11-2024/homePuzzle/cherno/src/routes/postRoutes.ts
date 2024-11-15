import express from 'express';

import { getPosts } from '../controllers/post/getPosts';
import { sendPost } from '../controllers/post/sendPost';
import { editPost } from '../controllers/post/editPost';
import { deletePost } from '../controllers/post/deletePost';
import { getUserPosts } from '../controllers/post/getUserPosts';

const router = express.Router();

router.get('/get', getPosts);
router.get('/get-user', getUserPosts);
router.post('/send', sendPost);
router.patch('/edit', editPost);
router.delete('/delete', deletePost);

export default router;