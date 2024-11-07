import { posts } from "../../models/posts";

export function getPosts(req: any, res: any)
{
    try{
        res.send({posts: posts});

    } catch(error){
        console.error(error);
    }
}