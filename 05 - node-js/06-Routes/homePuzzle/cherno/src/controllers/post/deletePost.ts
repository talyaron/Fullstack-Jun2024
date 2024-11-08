import { posts } from "../../models/posts";
import { usersPosts } from "../../models/usersPosts";

export function deletePost(req: any, res: any)
{
    try
    {
        const id = req.body.id;

        const postIndex = posts.findIndex((post) => post.id === id);
        if(postIndex === -1) throw new Error("Post not found");

        usersPosts.forEach((up, index) => {if(up.postId === id) usersPosts.splice(index ,1)});

        posts.splice(postIndex, 1);

        res.send({message: "Post deleted successfully"});
    }
    catch(error)
    {
        console.error(error);
        res.status(500).send('Error deleting post');
    }
}