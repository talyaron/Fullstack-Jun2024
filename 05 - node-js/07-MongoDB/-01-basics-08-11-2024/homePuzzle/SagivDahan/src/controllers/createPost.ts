import { PostModel } from "../models/posts";

export async function createPost(req:any, res:any) {
    const post = new PostModel({
        title: req.body.title,
        description: req.body.description,
        username: req.body.username,
        imgUrl: req.body.imgUrl
    });

    try {
        const savedPost = await post.save();
        res.status(201).send({ post: savedPost }); 
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error creating post" });
    }
}