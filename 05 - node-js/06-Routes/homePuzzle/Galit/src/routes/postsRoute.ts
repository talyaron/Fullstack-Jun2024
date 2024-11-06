import express from 'express';
import { posts } from '../models/postsModel';
import { randomUUID } from 'crypto';

const router = express.Router();

router.post('/add-post', (req: any, res: any) => {
    const { title, text, image } = req.body;
    if (!title || !text || !image) {
        return res.status(400).json({ error: "All fields (title, text, image) are required" });
    }

    const id = randomUUID();
    posts.push({ id, title, text, image });
    res.status(201).json({ message: "Post added successfully" });
});

router.get('/get-posts', (req, res) => {
    res.json({ posts });
});

export default router;
