import { posts } from "../../models/postsModel";




export function removePost(req:any, res:any)  {
    try {
      const { postId } = req.body;  
      const foundPostIndex = posts.findIndex(post => post.id === postId);
  
      if (foundPostIndex !== -1) {
        posts.splice(foundPostIndex, 1);
        res.json({ message: "Post removed successfully" });
      } else {
        res.status(404).json({ error: "Post not found" });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred." });
      }
    }
  }//
  