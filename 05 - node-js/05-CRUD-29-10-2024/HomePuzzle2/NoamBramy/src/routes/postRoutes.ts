import express from 'express';
import { upload } from '../model/posts/posts';
import { getPost } from '../controllers/getPost';
import { sendPost } from '../controllers/sendPost';
import { uploadImage } from '../controllers/uploadImage';
import { deletePost } from '../controllers/deletePost';
import { updatePost } from '../controllers/updatePost';
export const router = express.Router()

router.get('/get-posts', getPost);
router.post("/send-form", sendPost);
router.put('/update-post/:id', updatePost);
router.delete('/delete-post/:id', deletePost);
router.post('/upload-image', upload.single('image'), uploadImage);

export const postRoutes = router;