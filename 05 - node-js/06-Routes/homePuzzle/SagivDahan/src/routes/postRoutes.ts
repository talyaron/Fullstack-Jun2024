import  express  from "express";
const router = express.Router()

import { addPost } from "../controllers/addPost";
import { deletePost } from "../controllers/deletePost";
import { updatePosts } from "../controllers/updatePosts";
import { getPosts } from "../controllers/getPosts";


router.post("/add-post", addPost);
router.delete("/delete-post/:id", deletePost);
router.put("/update-post/:id", updatePosts);
router.get('/get-posts', getPosts);

export default router;