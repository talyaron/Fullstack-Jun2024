import { posts } from "../model/posts/posts";

export function updatePost(req:any, res:any) {
  try {
      const { id } = req.params;
      const { title, text, image } = req.body;
      const postIndex = posts.findIndex(post => post.id === id);

      if (postIndex === -1) return res.status(404).send('Post not found');

      posts[postIndex] = { ...posts[postIndex], title, text, image };
      res.send({ message: 'Post successfully updated', posts });
  } catch (error) {
      console.error(error);
      res.status(500).send('Error updating post');
  }
}