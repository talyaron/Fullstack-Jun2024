import express from 'express';
import { createUser } from '../controllers/createUserCont';
export const router = express.Router()

router.post("/send-user", createUser);

export const userRoutes = router;