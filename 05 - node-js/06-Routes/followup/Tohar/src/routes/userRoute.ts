import express from 'express';
import { posts } from '../models/postsModel';

const router = express.Router();

router.post('/add-post', (req: any, res: any) => {
    const { caption, imageURL } = req.body;
    
    console.log('Received POST request:', req.body);  

    if (!caption || !imageURL) {
        return res.status(400).json({ error: "All fields (title, text, imageURL) are required" });
    }

    const id = crypto.randomUUID();
    posts.push({id, caption, imageURL });

    console.log('Current posts:', posts); 

    res.status(201).json({ message: "Post added successfully" });
});

router.get('/get-posts', (req, res) => {
    res.json({ posts });
});

export default router;
