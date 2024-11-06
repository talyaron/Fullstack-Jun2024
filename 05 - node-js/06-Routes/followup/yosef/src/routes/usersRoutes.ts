import express from 'express';
import { posts } from '../models/posts/postsModel';
const router = express.Router();


router.post('/add-post', (req: any, res: any) => {
    console.log('Received POST request:', req.body);  
    const { title, text, imageURL } = req.body;
    
 

    if (!title || !text || !imageURL) {
        return res.status(400).json({ error: "All fields (title, text, imageURL) are required" });
    }

    const id = crypto.randomUUID();
    posts.push({id, title, text, imageURL });

    console.log('Current posts:', posts); 

    res.status(201).json({ message: "Post added successfully" });
});

router.get('/get-posts', (req, res) => {
    res.json({ posts });
});

export default router;