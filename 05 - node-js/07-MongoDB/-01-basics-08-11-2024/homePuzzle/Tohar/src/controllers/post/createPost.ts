import { randomBytes } from "crypto";
import { posts, PostModel } from "../../models/postModel";


export async function createPost(req:any, res:any){
    try {
                const { caption, imageURL } = req.body;
        
                if ( !caption || !imageURL) {
                    return res.status(400).json({ error: "All fields (title, text, imageURL) are required" });
                }

                const id = randomBytes(16).toString("hex"); 
                posts.push({ id, caption, imageURL });

                const newPost = new PostModel({ caption, imageURL, id});
                await newPost.save();
        
                res.status(201).json({ message: "Post added successfully" });
            } catch (error) {
                console.error("Error in /api/add-post:", error);
                res.status(500).json({ error: "Internal Server Error" });
            }
}