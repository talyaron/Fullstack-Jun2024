import express from 'express';
import { getPosts } from '../controllers/posts/getPostsCont';
import { addPost } from '../controllers/posts/setPostsCont';
import { editPost } from '../controllers/posts/editPostCont';
import { deletePost } from '../controllers/posts/deletePostCont';

const postRouter = express.Router()

postRouter.post("/add-post", addPost);
postRouter.get("/get-posts", getPosts);
postRouter.patch("/edit/:id", editPost);
postRouter.delete("/delete/:id", deletePost);

export default postRouter;