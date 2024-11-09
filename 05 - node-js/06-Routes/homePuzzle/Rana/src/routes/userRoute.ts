// userRoute.ts

import express from 'express';
import { registerUser, loginUser } from '../controller/userController';

const router = express.Router()

router.post('/api/register', registerUser);
router.post('/api/login', loginUser);

export default router;
