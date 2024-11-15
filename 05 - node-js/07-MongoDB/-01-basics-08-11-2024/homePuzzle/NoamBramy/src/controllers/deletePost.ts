import { PostModel } from "../model/posts/postModel";

export async function deletePost(req:any, res:any) {
  try {
      const { id } = req.params;

      const post = await PostModel.findOne({ id });
      if (!post) {
        return res.status(404).send('Post not found');
      }

      await PostModel.deleteOne({ id });
      res.send({ message: 'Post successfully deleted' });
  } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting post');
  }
}