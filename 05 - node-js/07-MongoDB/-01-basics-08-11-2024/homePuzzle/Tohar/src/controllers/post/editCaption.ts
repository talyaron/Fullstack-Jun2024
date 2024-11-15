import { posts } from "../../models/postModel";

export function editCaption(req:any, res:any) {
    try {
        const { caption, id } = req.body;
        const postId = id;
        
        const post = posts.find(id => id.id === postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.caption = caption;
        return res.json({ message: 'Caption updated successfully', post });
            
    } catch(error) {
        console.error("Error in /api/update-post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    };
};