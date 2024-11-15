import { PostModel } from "../model/posts/postModel";

export async function updatePost(req:any, res:any) {
  try {
      const { id } = req.params;
      const { title, text, image } = req.body;
      const post = await PostModel.findOne({ id });
      if (!post) {
        return res.status(404).send('Post not found');
      }
      post.title = title
      post.text = text
      post.image = image

      await post.save();
      res.send({ message: 'Post successfully updated' });
  } catch (error) {
      console.error(error);
      res.status(500).send('Error updating post');
  }
}