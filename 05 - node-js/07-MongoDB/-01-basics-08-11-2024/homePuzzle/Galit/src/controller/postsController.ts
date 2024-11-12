import { PostModel } from '../models/postsModel';

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
    const { id } = req.body;
    try {
        console.log(`Deleting post with id: ${id}`);

        const post = await PostModel.findById(id);
        if (!post) {
            console.log(`Post with id ${id} not found`);
            return res.status(401).json({ error: "Post not found" });
        }

        await PostModel.findByIdAndDelete(id);
        console.log(`Post with id ${id} deleted`);
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function editPost(req: any, res: any) {
    try {
    const { id } = req.body;
    const { title, text, image } = req.body;


        console.log(`Editing post with id: ${id}`);

        const updatedFields: Partial<{ title: string; text: string; image: string }> = {};
        if (title !== undefined) updatedFields.title = title;
        if (text !== undefined) updatedFields.text = text;
        if (image !== undefined) updatedFields.image = image;

        const updatedPost = await PostModel.findByIdAndUpdate(id, updatedFields, { new: true });
        if (!updatedPost) {
            console.log(`Post with id ${id} not found`);
            return res.status(404).json({ error: "Post not found" });
        }

        console.log(`Post with id ${id} updated`);
        res.status(200).json({ message: "Post updated successfully", post: updatedPost });
    } catch (error) {
        console.error('Error updating post:', error);
        res.status(500).json({ error: "Internal server error" });
    }
}
