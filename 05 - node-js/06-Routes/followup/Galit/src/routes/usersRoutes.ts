import express from 'express';
import {posts} from '../models/postModel';
const router = express.Router()

router.post('/add-post'), (req:any, res: any) =>{
    const {title, text, imageURL} =req.body;
    console.log('received POST request:', req.body);
    if (!title || !text || !imageURL) {
        return res.status(400).json({ error: "All fields (title, text, imageURL) are required" });
    }



const id = crypto.randomUUID();
posts.push({id, title, text, imageURL });

console.log('Current posts:', posts); 

res.status(201).json({ message: "Post added successfully" });

}
router.get('/get-posts', (req, res) =>{
    res.json({posts});
})


export default router;