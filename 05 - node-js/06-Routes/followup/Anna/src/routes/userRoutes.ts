import express from 'express';
import bodyParser from 'body-parser';
import { posts } from '../Model/posts';
import { addPosts } from '../controller/setPostCon';
import { getPosts } from '../controller/getPostCon';

const router = express.Router();

router.post('/add-post', addPosts);


router.get('/get-posts', getPosts);

export default router;