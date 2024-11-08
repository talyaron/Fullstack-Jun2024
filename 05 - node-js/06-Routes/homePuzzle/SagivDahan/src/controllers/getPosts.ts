import { posts } from "../models/posts";

export function getPosts (req:any, res:any){
    try {
        res.json({ posts });
    } catch (error) {
        console.error( "cannot load posts",error);
    }

}