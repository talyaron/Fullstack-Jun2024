import { PostModel} from "../../models/posts";
import { UserPostModel } from "../../models/usersPosts";

export async function deletePost(req: any, res: any)
{
    try
    {
        const id = req.body.id;

        await PostModel.findByIdAndDelete(id);
        await UserPostModel.deleteMany({ postId: id });

        res.send({message: "Post deleted successfully"});
    }
    catch(error)
    {
        console.error(error);
        res.status(500).send('Error deleting post');
    }
}