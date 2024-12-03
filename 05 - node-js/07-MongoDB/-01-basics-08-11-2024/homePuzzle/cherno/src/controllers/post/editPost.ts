import { PostModel } from "../../models/posts";

export async function editPost(req: any, res: any)
{
    try
    {
        const data = req.body;
        if(!data) throw new Error("No data found");

        const postId = data.postId;
        const type = data.type;
        const content = data.content;

        const updatedPost = await PostModel.findByIdAndUpdate(postId, { [type] : content });

        if(type !== "title" && type !== "text" && type !== "text") throw new Error("Invalid type");

        res.send({message: "Post updated successfully"});
    }
    catch(error)
    {
        console.error(error);
        res.status(500).send('Error updating post');
    }
}