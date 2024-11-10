import { PostModel } from "../models/posts";

export async function getPosts(req: any, res: any) {
    try {
        const posts = await PostModel.find();
        console.log("Fetched posts:", posts);
        res.send({ posts });
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).send({ message: "Error fetching posts." });
    }
}