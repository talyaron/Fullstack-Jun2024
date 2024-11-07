import express, { Request, Response } from 'express';
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


router.get('/get-posts', (_req: Request, res: Response) => {
    res.json({ posts });
});


router.delete('/delete-post', (req: any, res: any) => {
    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ error: "Post ID is required" });
    }

    const postIndex = posts.findIndex(post => post.id === id);
    if (postIndex === -1) {
        return res.status(404).json({ error: "Post not found" });
    }

    posts.splice(postIndex, 1);
    res.status(200).json({ message: "Post deleted successfully" });
});

router.put('/edit-post', (req: any, res: any) => {
    const { id, title, text, image } = req.body;

    if (!id) {
        return res.status(400).json({ error: "Post ID is required" });
    }

    const post = posts.find(post => post.id === id);
    if (!post) {
        return res.status(404).json({ error: "Post not found" });
    }

    if (title !== undefined) post.title = title;
    if (text !== undefined) post.text = text;
    if (image !== undefined) post.image = image;

    res.status(200).json({ message: "Post updated successfully" });
});

export default router;
