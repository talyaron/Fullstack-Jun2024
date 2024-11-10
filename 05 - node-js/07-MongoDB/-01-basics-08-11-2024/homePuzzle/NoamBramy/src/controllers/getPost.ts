import { PostModel } from "../model/posts/postModel";

export async function getPost(req: any, res: any) {
  try {
      const postsData = await PostModel.find({});
      const allPosts = postsData.map(post => ({
          id: post.id,
          title: post.title,
          text: post.text,
          image: post.image,
      }));
      
      res.send(allPosts);
  } catch (error) {
      console.error("Error retrieving posts:", error);
      res.status(500).send('Error retrieving posts');
  }
};
