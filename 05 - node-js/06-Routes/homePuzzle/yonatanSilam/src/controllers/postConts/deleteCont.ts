import { allPosts } from "../../models/postModel";


export function deletePost (req: any, res: any) {
try {
    const { id } = req.body;
    if (!id) throw new Error("Missing title ");

    const uPostIndex = allPosts.findIndex((post) => post.id == id);
    if (uPostIndex == -1) throw new Error("not find post");
    allPosts.splice(uPostIndex, 1);
    res.send({ message: "Post received", allPosts });
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: "Error: " + (error as Error).message });
  }
}