import { posts } from "../../models/posts/postsModel";

export function editPost(req: any, res: any) {
  const { id } = req.params;
  const { title, text, imageURL, username } = req.body; // Get the post data from the request body

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  // Check if the user is authorized to edit the post
  if (post.username !== username) {
    return res
      .status(403)
      .json({ error: "You are not authorized to edit this post" });
  }

  // Update the post data if new data is provided in the request body 
  if (title) post.title = title;
  if (text) post.text = text;
  if (imageURL) post.imageURL = imageURL;

  res.json({ message: "Post updated successfully", post });
}
