import { PostModel } from "../models/posts";

export async function updatePosts (req:any, res:any) {
    const postId = req.params.id;
    const { post } = req.body;
    try {
        const updatedPost = await PostModel.findByIdAndUpdate(
            postId,
            {
                title: post.title,
                description: post.description,
                imageUrl: post.imageUrl
            },
            { new: true } 
        );
        if (updatedPost) {
            res.send({ message: "Post updated successfully", post: updatedPost });
        } else {
            res.status(404).send({ message: "Post not found." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error updating post." });
    }
}
