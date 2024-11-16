import { PostModel } from "../../model/post/postModel";

export const showAllPosts = async (req:any, res:any) => {
    try {
        const posts = await PostModel.find();
        res.json({ posts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};