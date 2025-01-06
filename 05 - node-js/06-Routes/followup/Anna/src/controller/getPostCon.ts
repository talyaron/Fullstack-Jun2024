import { posts } from "../Model/posts";

export function getPosts(req:any, res:any)  {
    res.json({ posts });
};