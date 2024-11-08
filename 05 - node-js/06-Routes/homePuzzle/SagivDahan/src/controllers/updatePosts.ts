import { posts } from "../models/posts";

export function updatePosts (req:any, res:any) {
    const postId = req.params.id;
    const { post } = req.body;

    const postIndex = posts.findIndex((p) => p.id === postId);
    if (postIndex !== -1) {
        posts[postIndex] = post;
        res.send({ message: "Post updated successfully", post });
    } else {
        res.status(404).send({ message: "Post not found." });
    }
}
