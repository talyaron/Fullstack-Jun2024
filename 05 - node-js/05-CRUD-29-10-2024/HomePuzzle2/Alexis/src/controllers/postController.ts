import { PostModel } from "../models/postModels";  // Assuming you have a Post model

// Add a new post
export async function addPost(req: any, res: any) {
    try {
        const { title, text, imageURL } = req.body;
        const post = new PostModel({
            title,
            text,
            imageURL,
        });
        await post.save();  // Save the post to the database

        res.status(201).json({ message: "Post created successfully!" });
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ error: "Failed to create post" });
    }
}

// Get all posts
export async function getPosts(req: any, res: any) {
    try {
        const posts = await PostModel.find();  // Fetch all posts
        res.status(200).json({ posts });
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ error: "Failed to fetch posts" });
    }
}
