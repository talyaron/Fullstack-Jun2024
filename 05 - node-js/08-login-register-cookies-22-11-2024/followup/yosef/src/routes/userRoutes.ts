import express from 'express';
import { registerUser } from '../controllers/userController/registerController';
import { loginUser } from '../controllers/userController/loginController';


const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
