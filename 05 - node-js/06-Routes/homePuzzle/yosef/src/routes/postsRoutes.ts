import express from 'express';
import { addPost } from '../controllers/posts/setPostContoller';
import { getPost } from '../controllers/posts/getPostController';
import { deletePost } from '../controllers/posts/deletePostController';
import { editTitlePost } from '../controllers/posts/editTitlePostController';
import { editTextPost } from '../controllers/posts/editTextPostController';

const router = express.Router()

router.post('/add-post', addPost);
router.get('/get-post', getPost);
router.delete('/delete-post', deletePost);
router.patch('/editTitle-post',editTitlePost)
router.patch('/editText-post',editTextPost);

export default router;