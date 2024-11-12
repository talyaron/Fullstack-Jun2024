import {Post ,PostModel,allPosts} from "../../models/postModel";

export async function addPost (req: any, res: any) {
    try {
        const { imageUrl, text, title } = req.body;
        if (!imageUrl || !text || !title)
          throw new Error("Missing imageUrl or text");
    
        const id = crypto.randomUUID();
        // const newPost: Post = { imageUrl, text, title, id };
        // allPosts.push(newPost); //?
        const newPost = new PostModel({ imageUrl, text, title });
        await newPost.save();

        res.send({ message: "Post received", allPosts });
      } catch (error) {
        console.error(error);
        res.status(400).send({ message: "Error: " + (error as Error).message });
      }
}