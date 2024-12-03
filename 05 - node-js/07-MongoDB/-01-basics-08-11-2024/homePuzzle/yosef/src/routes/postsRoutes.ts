import express from 'express';
import { addPost } from '../controllers/posts/setPostContoller';
import { getPostFromDB } from '../controllers/posts/getPostController';
// import { deletePost } from '../controllers/posts/deletePostController';
import { editTitlePost } from '../controllers/posts/editTitlePostController';
import { editTextPost } from '../controllers/posts/editTextPostController';
import { showAllPosts } from '../controllers/posts/showAllPosts';
import { deletePostFromDB } from '../controllers/posts/deletePostController';


const router = express.Router()

router.post('/add-post', addPost);
router.get('/get-post', getPostFromDB);
// router.delete('/delete-post', deletePost);
router.delete('/delete-post/:id', deletePostFromDB);
router.patch('/editTitle-post/:id',editTitlePost)
router.patch('/editText-post/:id',editTextPost);
router.get('/getAllPosts', showAllPosts);


export default router;