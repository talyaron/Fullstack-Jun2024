import { posts } from "../../models/posts/postsModel";

export function getPosts(req: any, res: any) {
  const { username } = req.query; // Get the username from the query string

  if (!username) {
    return res.status(400).json({ error: "Username is required" });
  }

  const userPosts = posts.filter((post) => post.username === username);
  res.json({ posts: userPosts });
}
