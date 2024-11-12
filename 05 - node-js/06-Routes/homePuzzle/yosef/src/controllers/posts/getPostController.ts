import { posts } from "../../model/post/postModel";

export function getPost (req:any, res:any){
    res.json({ posts });
}