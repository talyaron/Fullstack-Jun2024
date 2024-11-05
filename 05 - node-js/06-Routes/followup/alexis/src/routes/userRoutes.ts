import { error } from "console";
import express from "express";

const router = express.Router();

router.post('/add-post', (req:any, res:any)=>{
    const {title,text,imageURL}=req.body;
    console.log('Recieved POST request:', req.body);

if(!title||!text||!imageURL){
    return res.status(400).json({error:"All the fields are empty"})
}
const id = crypto.randomUUID();
posts.push({id, title, text, imageURL});

console.log('Current posts:', posts);

res.status(201).json({message:"Post has been added successfully"});

})
router.get('/get-posts', (req,res)=>{
    res.json({posts});
});

export default router;