import express from 'express';
import { addPost } from '../controllers/postConts/addPostCont';
import { getPost } from '../controllers/postConts/getPostCont';
import { updateImagePost } from '../controllers/postConts/updateImageCont';
import { deletePost } from '../controllers/postConts/deleteCont';
import { updateTitle } from '../controllers/postConts/updateTitleCont';
import { updateText } from '../controllers/postConts/updateTextCont';

const router = express.Router()

router.post('/send-post', addPost);
router.get('/get-posts', getPost);
router.patch('/updateImage-post', updateImagePost);
router.delete('/delete-post', deletePost);
router.patch('/updateText-post', updateText);
router.patch('/updateTitle-post', updateTitle);


export default router;