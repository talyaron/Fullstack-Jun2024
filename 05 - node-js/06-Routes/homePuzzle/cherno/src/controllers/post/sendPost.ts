import { posts } from "../../models/posts";
import { usersPosts } from "../../models/usersPosts";

export function sendPost(req: any, res: any)
{
    try {
        const data = req.body.data;
        const user = req.body.user;

        if(!data) throw new Error("No post found");
        posts.push(data);
        console.log(data.image)

        usersPosts.push({userId: user, postId: data.id})

        res.send({message: "post received"});

    } catch (error) {
        console.error(error);
        res.status(500).send({message: "Error"});   
    }
}