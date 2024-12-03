import { posts } from "../../models/posts/postsModel";

export function addPost(req: any, res: any) {
  const { title, text, imageURL, username } = req.body;

  if (!title || !text || !imageURL || !username) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const id = crypto.randomUUID();
  const newPost = { id, title, text, imageURL, username };
  posts.push(newPost);
  console.log("New post added:", newPost);
  res.status(201).json({ message: "Post added successfully", post: newPost });
}