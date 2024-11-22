import express from 'express'
import { addUser } from '../controllers/setUser';
const router = express.Router();

router.post("/add-user", addUser)

export default router