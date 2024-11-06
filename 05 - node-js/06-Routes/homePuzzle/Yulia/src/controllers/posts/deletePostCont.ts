import { posts } from "../../models/posts/postsModel";


export function deletePost(req: any, res: any) {
  const { id } = req.params;
  const index = posts.findIndex((post) => post.id === id);

  if (index !== -1) {
    posts.splice(index, 1);
    res.json({ message: "Post deleted successfully" });
  } else {
    res.status(404).json({ message: "Post not found" });
  }
}
