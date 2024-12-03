import { posts } from "../../models/posts/postsModel";

export function editPost(req: any, res: any) {
  const { id } = req.params;
  const { title, text, imageURL, username } = req.body; // get username from request body to check authorization
  console.log("Received username:", username); // log the username to check if it is received
  console.log("Post ID:", id);

  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  console.log("Post found:", post);
  console.log("Post owner username:", post.username); // log the post owner's username

  // check if the user is the owner of the post
  if (post.username !== username) {
    console.log("Authorization failed: user is not the owner of the post"); // log the authorization failure
    return res
      .status(403)
      .json({ error: "You are not authorized to edit this post" });
  }

  // replace the post with the updated data
  if (title) post.title = title;
  if (text) post.text = text;
  if (imageURL) post.imageURL = imageURL;

  console.log("Updated post:", post); // log the updated post

  res.json({ message: "Post updated successfully", post });
}