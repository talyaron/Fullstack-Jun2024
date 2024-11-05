import express from 'express';
import { getPosts } from '../controllers/posts/getPostsCont';
import { addPost } from '../controllers/posts/setPostsCont';
import { setUser } from '../controllers/user/setUser';
const router = express.Router()

router.post('/add-post', addPost);
router.get('/get-posts', getPosts);

router.get('/set-user', setUser);

export default router;