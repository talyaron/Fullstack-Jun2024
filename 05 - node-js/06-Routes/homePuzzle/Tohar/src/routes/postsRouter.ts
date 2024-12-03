import express from 'express';
import { createPost } from '../controllers/post/createPost';
import { deletePost } from '../controllers/post/deletePost';
import { editCaption } from '../controllers/post/editCaption';
import { updateImage } from '../controllers/post/updateImage';
import { getPosts } from '../controllers/post/getPosts';

const postRouter = express.Router();

postRouter.post('/create-post', createPost);
postRouter.get('/get-posts', getPosts);
postRouter.delete('/delete-post', deletePost);
postRouter.patch('/edit-caption', editCaption);  
postRouter.patch('/update-image', updateImage); 


export default postRouter;