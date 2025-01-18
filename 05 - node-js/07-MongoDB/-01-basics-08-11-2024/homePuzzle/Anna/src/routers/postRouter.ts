import  express  from "express";
import { posts } from "../Model/postModel";
import { deletePosts, editImgPost, editPostText, editPostTitle, sendPost } from "../controllers/Posts/setPostCon";
import { getPosts } from "../controllers/Posts/getPostCon";

const router = express.Router()

router.post('/send-posts',sendPost)

router.patch("/edit-title",editPostTitle)

router.patch("/edit-text",editPostText)

router.get("/get-posts",getPosts)

router.delete("/delete-posts",deletePosts)

router.patch("/editImg-posts",editImgPost)


export default router;