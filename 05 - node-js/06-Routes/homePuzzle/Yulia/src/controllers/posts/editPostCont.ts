import { posts } from "../../models/posts/postsModel";

export function editPost(req: any, res: any) {
  const { id } = req.params;
  const { title, text, imageURL } = req.body;

  const post = posts.find((post) => post.id === id);
  if (post) {
    // Update only the fields that are provided
    if (title) post.title = title;
    if (text) post.text = text;
    if (imageURL) post.imageURL = imageURL;

    res.json({ message: "Post updated successfully", post });
  } else {
    res.status(404).json({ message: "Post not found" });
  }
}
