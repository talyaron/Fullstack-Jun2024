import { posts } from "../../models/postModel";

export function getPosts (req:any, res:any) {
    res.json({ posts });
};