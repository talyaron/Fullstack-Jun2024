import { PostModel } from "../../models/posts";
import { UserPostModel } from "../../models/usersPosts";

export async function getUserPosts(req: any, res: any)
{
    try{
        const userId = req.query.user as string;
        if(!userId) throw new Error("User not found")
        
        const userPostsIds = await UserPostModel.find({ userId });

        const userPosts = await Promise.all(userPostsIds.map(up => PostModel.findById( up.postId )));

        res.send({posts: userPosts});

    } catch(error){
        console.error(error);
    }
}