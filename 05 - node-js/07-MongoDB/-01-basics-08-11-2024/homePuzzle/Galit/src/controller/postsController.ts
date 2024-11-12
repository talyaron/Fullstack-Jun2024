import { PostModel, posts } from '../models/postsModel';
import { randomUUID } from 'crypto';

export async function addPost(req: any, res: any) {
    try {
        const { title, text, image } = req.body;

        if (!title || !text || !image) {
            return res.status(400).json({ error: "All fields (title, text, image) are required" });
        }
        console.log(title, text)

        const newPost = new PostModel({ title, text, image })
        const postDB = await newPost.save()
       
        res.status(201).json({ message: "Post added successfully", post: postDB });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function getPosts(req: any, res: any) {
    try {
        const postsDB = await PostModel.find();

        res.status(200).json({posts:postsDB});
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: "Internal server error" });
        
    }
}

export async function deletePost(req: any, res: any) {
    const { id } = req.params;
    console.log(`Deleting post with id: ${id}`);

    const postIndex = posts.findIndex(post => post.id === id);
    if (postIndex === -1) {
        console.log(`Post with id ${id} not found`);
        return res.status(404).json({ error: "Post not found" });
    }

    posts.splice(postIndex, 1);
    console.log(`Post with id ${id} deleted`);
    res.status(200).json({ message: "Post deleted successfully" });
}

export async function editPost(req: any, res: any) {
    const { id } = req.params;
    const { title, text, image } = req.body;
    console.log(`Editing post with id: ${id}`);

    const post = posts.find(post => post.id === id);
    if (!post) {
        console.log(`Post with id ${id} not found`);
        return res.status(404).json({ error: "Post not found" });
    }

    if (title !== undefined) post.title = title;
    if (text !== undefined) post.text = text;
    if (image !== undefined) post.image = image;

    console.log(`Post with id ${id} updated`);
    res.status(200).json({ message: "Post updated successfully" });
}
