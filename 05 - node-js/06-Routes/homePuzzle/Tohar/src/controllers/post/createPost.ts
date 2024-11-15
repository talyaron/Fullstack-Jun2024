import { randomBytes } from "crypto";
import { posts } from "../../models/postModel";


export function createPost(req:any, res:any){
    try {
                const { caption, imageURL } = req.body;
        
                if ( !caption || !imageURL) {
                    return res.status(400).json({ error: "All fields (title, text, imageURL) are required" });
                }
        
                const id = randomBytes(16).toString("hex"); 
                posts.push({ id, caption, imageURL });
        
                res.status(201).json({ message: "Post added successfully" });
            } catch (error) {
                console.error("Error in /api/add-post:", error);
                res.status(500).json({ error: "Internal Server Error" });
            }
}