import express from "express";
import { addPost, getPosts } from "../controllers/postController"; 

const router = express.Router();

router.post("/add-post", addPost);
router.get("/get-posts", getPosts);

export default router;
