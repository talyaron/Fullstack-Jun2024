import { PostModel } from "../../models/posts/postsModel";

export async function getPosts (req: any, res: any) {
  try {
    const allPosts = await PostModel.find();
    res.status(200).json(allPosts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};