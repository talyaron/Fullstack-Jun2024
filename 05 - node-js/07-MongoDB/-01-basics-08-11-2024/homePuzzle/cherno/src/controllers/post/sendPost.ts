import { PostModel } from "../../models/posts";
import { UserPostModel } from "../../models/usersPosts";

export async function sendPost(req: any, res: any)
{
    try {
        const data = req.body.data;
        const user = req.body.user;

        if(!data) throw new Error("No post found");

        const newPost = new PostModel(data);
        await newPost.save();

        const newUserPost = new UserPostModel({ userId: user, postId: newPost.id })
        await newUserPost.save();

        res.send({message: "post received"});

    } catch (error) {
        console.error(error);
        res.status(500).send({message: "Error"});   
    }
}