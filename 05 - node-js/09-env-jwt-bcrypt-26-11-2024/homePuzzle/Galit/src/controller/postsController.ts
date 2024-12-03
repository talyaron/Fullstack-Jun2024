import { posts } from '../models/postsModel';
import { randomUUID } from 'crypto';

export async function addPost(req: any, res: any) {
    const { title, text, image } = req.body;

    if (!title || !text || !image) {
        return res.status(400).json({ error: "All fields (title, text, image) are required" });
    }

    const id = randomUUID();
    posts.push({ id, title, text, image });
    console.log(`Added post: ${id}`); 
    res.status(201).json({ message: "Post added successfully", id });
}

export async function getPosts(req: any, res: any) {
    res.json({ posts });
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
