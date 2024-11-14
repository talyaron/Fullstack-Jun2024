import { PostModel } from "../../models/posts/postsModel";


export async function deletePost(req: any, res: any) {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(404).json({ error: "Post not found" });
    }
    const pet = await PostModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ error: "Error deleting post" });
  }
}