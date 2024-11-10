import express from 'express';
import { registerUser, loginUser, logoutUser, checkSession } from '../controller/userController';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/session', checkSession);


export default router;
