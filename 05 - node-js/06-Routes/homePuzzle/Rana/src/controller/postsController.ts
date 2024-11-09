// postsController.ts

import { Request, Response } from 'express';
import { posts } from '../models/postsModel';
import { randomUUID } from 'crypto';


export const addPost = (req: Request, res: Response) => {
  const { title, text, imageURL } = req.body;

  if (!title || !text || !imageURL) {
    return res.status(400).json({ error: "All fields are required" });
  }

  posts.push({ title, text, imageURL });
  console.log("Post added successfully");
  res.status(201).json({ message: "Post added successfully" });
};

export const getPosts = (req: Request, res: Response) => {
  res.json({ posts });
};

export const updatePost = (req: Request, res: Response) => {
  const index = parseInt(req.params.index);
  const { title, text, imageURL } = req.body;
 

  if (isNaN(index) || index < 0 || index >= posts.length) {
    return res.status(400).json({ error: "Invalid index" });
  }

  if (title) posts[index].title = title;
  if (text) posts[index].text = text;
  if (imageURL) posts[index].imageURL = imageURL;
  console.log("Post updated successfully");
  res.status(200).json({ message: "Post updated successfully" });
};

export const deletePost = (req: Request, res: Response) => {
  const index = parseInt(req.params.index);

  if (isNaN(index) || index < 0 || index >= posts.length) {
    return res.status(400).json({ error: "Invalid index" });
  }

  posts.splice(index, 1);
  console.log("Post deleted successfully");
  res.status(200).json({ message: "Post deleted successfully" });
};
