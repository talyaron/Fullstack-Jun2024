import { posts } from "../model/posts/posts";

export function deletePost(req:any, res:any) {
  try {
      const { id } = req.params;
      const postIndex = posts.findIndex(post => post.id === id);

      if (postIndex === -1) return res.status(404).send('Post not found');

      posts.splice(postIndex, 1);
      res.send({ message: 'Post successfully deleted', posts });
  } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting post');
  }
}