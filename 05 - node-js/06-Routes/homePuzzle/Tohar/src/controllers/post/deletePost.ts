import { posts } from "../../models/postModel";

export function deletePost(req:any, res:any):void {
    try {
                const { id } = req.body;
                const postId = id;
        
                const index = posts.findIndex(id => id.id === postId);
                console.log('index', index)
                if (index === -1) {
                    return res.status(404).json({ message: 'Post not found' });
                }
                
                posts.splice(index, 1);
        
                //find the post in the array and delete it
                return res.json({ message: 'Post deleted successfully', posts });
            
            } catch(error) {
                console.error("Error in /api/update-post:", error);
                res.status(500).json({ error: "Internal Server Error" });
            } 
}