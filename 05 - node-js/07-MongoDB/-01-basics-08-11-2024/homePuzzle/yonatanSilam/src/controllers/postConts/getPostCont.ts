import { allPosts, PostModel } from "../../models/postModel";


export async function getPost (req: any, res: any) {
    // res.send({ allPosts });
    try {
      const posts = await PostModel.find();
      const allPosts =posts.map(post=>post)
      return res.send({ posts });

      res.status(200).json({ message: 'User logged in successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error', error });
  }
}
  