import express from 'express';
import { posts } from '../models/userModels';
const router = express.Router();


router.get('/get-user', (req, res) => {
    res.json({ posts });
});

export default router;