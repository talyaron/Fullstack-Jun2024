import { posts } from "../../model/post/postModel";

export function deletePost (req: any, res:any){
try{
    const { id } = req.body;
    
    const postIndex = posts.findIndex(p => p.id === id);
    
    if (postIndex === -1) {
        return res.status(404).json({ error: "Post not found" });
    }
    
    posts.splice(postIndex, 1);
    console.log('Deleted post:', posts[postIndex]);
    res.status(200).json({ message: "Post deleted successfully" });
    console.log("Post deleted successfully");
    console.log(posts)
}

catch(error){
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting the post" });
}
}