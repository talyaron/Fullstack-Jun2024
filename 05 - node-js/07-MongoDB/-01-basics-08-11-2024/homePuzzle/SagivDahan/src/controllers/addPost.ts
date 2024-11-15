import { PostModel } from "../models/posts";


export async function addPost (req:any, res:any){
    try {
        const { post } = req.body;
        if (!post) throw new Error("No post found");
        const newPost = new PostModel(post);
        await newPost.save();
        console.log({post});
        res.status(201).send({ message: "Post created", post });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error creating post" });
    }
}
   
