import  express  from "express";
import path from "path";
import { addPost, upload } from "../controllers/postControllers/addPostCont";
import { getPosts } from "../controllers/postControllers/postsGetCont";
import { updatePost } from "../controllers/postControllers/postsUpdateCont";
import { removePost } from "../controllers/postControllers/postRemoveCont";



const router = express.Router()



router.post("/add-post", upload.single("image"), addPost);
router.post(`/get-posts`,getPosts)
router.post(`/update-post`,updatePost)
router.post(`/remove-post`,removePost)

export default router;