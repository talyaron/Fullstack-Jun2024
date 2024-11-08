import { posts } from "../../models/posts";
import { usersPosts } from "../../models/usersPosts";

export function getUserPosts(req: any, res: any)
{
    try{
        const user = req.query.user as string;
        if(!user) throw new Error("User not found")

        const userPostsId = usersPosts.filter(up => up.userId === user)
        const userPosts = userPostsId.map(up => posts.find(post => post.id === up.postId))

        res.send({posts: userPosts});

    } catch(error){
        console.error(error);
    }
}