import { posts } from "../model/posts/posts";

export function getPost(req: any, res: any) {
  try {
      const postsData = posts.map(post => ({
          id: post.id,
          title: post.title,
          text: post.text,
          image: post.image,
      }));
      res.send(postsData);
  } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving posts');
  }
};