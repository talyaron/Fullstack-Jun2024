// postsRoute.ts


const express = require("express");
import { addPost, getPosts, updatePost, deletePost } from '../controller/postsController';


const router = express.Router();

router.post('/add-post', addPost);
router.get('/get-posts', getPosts);
router.put('/update-post/:index', updatePost);
router.delete('/delete-post/:index', deletePost);

export default router;

