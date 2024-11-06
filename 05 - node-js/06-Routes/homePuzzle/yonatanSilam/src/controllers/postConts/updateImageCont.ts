import { allPosts } from "../../models/postModel";

export function updateImagePost (req: any, res: any) {
    try {
        const { imageUrl, id } = req.body;
        if (!imageUrl || !id) throw new Error("Missing title ");
    
        const uPost = allPosts.find((post) => post.id == id);
        if (!uPost) throw new Error("not find post");
        uPost.imageUrl = imageUrl;
    
        res.send({ message: "Post received", allPosts });
      } catch (error) {
        console.error(error);
        res.status(400).send({ message: "Error: " + (error as Error).message });
      }
}