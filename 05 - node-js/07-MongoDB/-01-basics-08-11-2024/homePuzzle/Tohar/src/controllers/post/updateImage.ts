import { posts, PostModel } from "../../models/postModel";

export function updateImage(req:any, res:any) {
    try {
        const { image, id } = req.body;
        const postId = id;
        
        const post = posts.find(id => id.id === postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.imageURL = image;
        return res.json({ message: 'image updated successfully', post });
            
    } catch(error) {
        console.error("Error in /api/update-post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    } 
};