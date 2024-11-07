import express from 'express';
import { loginUser } from '../controllers/user/loginUser';
import { registerUser } from '../controllers/user/createUser';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;