import { PostModel } from "../model/posts/postModel";
import crypto from 'crypto';

export async function sendPost(req: any, res: any) {
  try {
    const { title, text, image } = req.body;
    if (!title || !text || !image) throw new Error("Missing post data");

    const existingPost = await PostModel.findOne({ title });
    if (existingPost) {
      return res.status(400).send({ message: "Post with this title already exists" });
    }

    const newPost = new PostModel({
      id: `id=${crypto.randomUUID()}`,
      title,
      text,
      image,
    });
    await newPost.save();
    res.send({ message: "Post successfully created" });
  } catch (error) {
    console.error("Error in sendPost function:", error);
    res.status(500).send({ message: "Error creating post" });
  }
};
