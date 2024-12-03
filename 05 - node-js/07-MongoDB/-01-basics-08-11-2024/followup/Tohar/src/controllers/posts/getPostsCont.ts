import { posts } from "../../models/posts/postsModel";

export function getPosts (req:any, res:any) {
    res.json({ posts });
}