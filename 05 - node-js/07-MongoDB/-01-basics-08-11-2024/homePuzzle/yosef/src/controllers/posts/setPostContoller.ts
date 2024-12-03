import { PostModel } from "../../model/post/postModel";
import { posts } from "../../model/post/postModel";

export const addPost = async (req: any, res: any) => {
    try{

    const { title, text, imageURL } = req.body;

    if (!title || !text || !imageURL) {
        return res.status(400).json({ error: "All fields (title, text, imageURL) are required" });
    }

    // const id = crypto.randomUUID();
    // posts.push({id, title, text, imageURL });

    const newPost = new PostModel({
        id: `id=${crypto.randomUUID()}`,
        title,
        text,
        imageURL,
    });
    await newPost.save();
    console.log('Post saved successfully in the database');

    console.log('Current posts:', newPost); 

    res.status(201).json({ message: "Post added successfully" });
}
    catch(error){
        console.error('Error while adding post:', error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}