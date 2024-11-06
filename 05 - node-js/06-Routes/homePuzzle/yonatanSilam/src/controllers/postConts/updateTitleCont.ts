import { allPosts } from "../../models/postModel";

export function updateTitle (req: any, res: any) {
    try {
        const { title, id } = req.body;
        if (!title || !id) throw new Error("Missing title ");
    
        const uPost = allPosts.find((post) => post.id == id);
        if (!uPost) throw new Error("not find post");
        uPost.title = title;
    
        res.send({ message: "Post received", allPosts });
      } catch (error) {
        console.error(error);
        res.status(400).send({ message: "Error: " + (error as Error).message });
      }
}