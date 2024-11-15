import { PostModel } from "../../models/posts";

export async function getPosts(req: any, res: any)
{
    try
    {
        res.send({posts: PostModel.find({})});
    } 
    catch(error)
    {
        console.error(error);
    }
}