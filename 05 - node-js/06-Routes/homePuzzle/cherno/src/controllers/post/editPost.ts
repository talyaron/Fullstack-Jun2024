import { posts } from "../../models/posts";

export function editPost(req: any, res: any)
{
    try
    {
        const data = req.body;
        if(!data) throw new Error("No data found");

        const postId = data.postId;
        const type = data.type;
        const content = data.content;

        const postIndex = posts.findIndex((post) => post.id === postId);
        if(postIndex === -1) throw new Error("Post not found");

        if(type === "title") posts[postIndex].title = content;
        else if(type === "text") posts[postIndex].text = content;
        else if(type === "image") posts[postIndex].image = content;
        else throw new Error("Invalid type");

        res.send({message: "Post updated successfully"});
    }
    catch(error)
    {
        console.error(error);
        res.status(500).send('Error updating post');
    }
}