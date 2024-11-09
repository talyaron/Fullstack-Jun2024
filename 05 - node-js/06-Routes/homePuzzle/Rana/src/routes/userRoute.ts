// userRoute.ts

import { Router } from 'express';
import { registerUser, loginUser } from '../controller/userController';

const router = Router();

router.post('/api/register', registerUser);
router.post('/api/login', loginUser);

export default router;
