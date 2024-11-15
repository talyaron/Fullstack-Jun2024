import { PostModel  } from "../../models/posts/postsModel";

export async function addPost(req: any, res: any) {
  try {
      const { title, text, imageURL, username } = req.body;

    if (!title || !text || !imageURL || !username) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const newPost = await PostModel.create({ title, text, imageURL, username });
    res.status(201).json({ message: "Post added successfully", post: newPost });
  
  } catch (error) {
    console.error("Error adding post:", error);
    res.status(500).json({ error: "Error adding post" });
    
  }
}

