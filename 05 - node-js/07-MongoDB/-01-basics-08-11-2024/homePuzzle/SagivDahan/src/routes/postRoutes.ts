import  express  from "express";
const router = express.Router()

import { addPost } from "../controllers/addPost";
import { deletePost } from "../controllers/deletePost";
import { updatePosts } from "../controllers/updatePosts";
import { getPosts } from "../controllers/getPosts";
import { createPost } from "../controllers/createPost";

router.post("/add-post", addPost);
router.delete("/delete-post/:id", deletePost);
router.put("/update-post/:id", updatePosts);
router.get('/get-posts', getPosts);
router.post("/api/post/create", createPost);
export default router;