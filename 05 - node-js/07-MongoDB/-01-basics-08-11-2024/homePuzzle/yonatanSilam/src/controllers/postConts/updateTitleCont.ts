import { allPosts, PostModel } from "../../models/postModel";

export async function updateTitle(req: any, res: any) {
  try {
    const { title, id } = req.body;
    if (!title || !id) throw new Error("Missing title ");

    // const uPost = allPosts.find((post) => post.id == id);
    // if (!uPost) throw new Error("not find post");
    // uPost.title = title;

    // res.send({ message: "Post received", allPosts });

    const updatedPost = await PostModel.findByIdAndUpdate(
      id,
      { title },
      { new: true } // Returns the updated document
    );

    if (!updatedPost) {
      return res.status(404).send({ message: "Post not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: "Error: " + (error as Error).message });
  }
}
// const updatedPost = await Post.findByIdAndUpdate(
//   id,
//   { title },
//   { new: true }  // Returns the updated document
// );

// if (!updatedPost) {
//   return res.status(404).send({ message: 'Post not found' });
// }
