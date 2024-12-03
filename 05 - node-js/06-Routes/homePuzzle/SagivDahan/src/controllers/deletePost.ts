import { posts } from "../models/posts";

export function deletePost (req:any, res:any) {
    const postId = req.params.id;
    const postIndex = posts.findIndex(post => post.id === postId);

    if (postIndex !== -1) {
        posts.splice(postIndex, 1);
        res.send({ message: "Post deleted successfully." });
    } else {
        res.status(404).send({ message: "Post not found." });
    }
}