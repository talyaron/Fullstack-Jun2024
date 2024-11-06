import { posts } from "../model/posts/posts";
import { addPost } from "./addPost";
import crypto from 'crypto';

export function sendPost (req:any, res:any) {
  try {
      const { title, text, image } = req.body;
      if (!title || !text || !image) throw new Error("Missing post data");

      const newPost = addPost({ id: crypto.randomUUID(), title, text, image });
      posts.push(newPost);

      res.send({ message: "Post successfully created", posts });
  } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error creating post" });
  }
};