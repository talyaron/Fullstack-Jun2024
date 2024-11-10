// userRoute.ts


const express = require("express");
import { registerUser, loginUser } from '../controller/userController';

const router = express.Router()

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
