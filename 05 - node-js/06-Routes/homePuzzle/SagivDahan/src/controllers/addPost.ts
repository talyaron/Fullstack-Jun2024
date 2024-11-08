import { posts } from "../models/posts";

export function addPost (req:any, res:any){
    try {
        const { post } = req.body;
        if (!post) throw new Error("No post found");
        posts.push(post);
        console.log({post});
        res.send({ message: "Post created", post });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error creating post" });
    }
}
   
