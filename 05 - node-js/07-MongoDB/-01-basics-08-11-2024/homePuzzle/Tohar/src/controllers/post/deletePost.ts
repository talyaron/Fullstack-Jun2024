import { posts, PostModel } from "../../models/postModel";

export function deletePost(req:any, res:any):void {
        const { id } = req.body;
        const postId = id;

        PostModel.deleteOne({ id: postId })
        .catch(err => {
            console.error('Error deleting post:', err);
        });
        
    return res.json({ message: 'Post deleted successfully', posts });
};


