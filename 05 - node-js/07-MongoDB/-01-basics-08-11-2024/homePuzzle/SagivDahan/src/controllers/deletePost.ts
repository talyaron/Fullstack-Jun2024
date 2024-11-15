import { PostModel } from "../models/posts";

export async function deletePost (req: any, res: any) {
    const postId = req.params.id;
    console.log("Received post ID for deletion:", postId);

    try {
        const deletedPost = await PostModel.findByIdAndDelete(postId);
        if (deletedPost) {
            res.send({ message: "Post deleted successfully." });
        } else {
            res.status(404).send({ message: "Post not found." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error deleting post." });
    }
}