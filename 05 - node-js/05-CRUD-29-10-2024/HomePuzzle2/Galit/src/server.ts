import express from 'express';
import bodyParser from 'body-parser';
import { randomBytes } from 'crypto';

const app = express();
const port = process.env.PORT || 3000;

const posts: Array<{ title: string, text: string, image: string, id: string }> = [];

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/add-post', (req: any, res: any) => {
    const { title, text, image } = req.body;
    if (!title || !text || !image) {
        return res.status(400).json({ error: "All fields (title, text, image) are required" });
    }

    const id = randomBytes(16).toString("hex");
    posts.push({ id, title, text, image });
    res.status(201).json({ message: "Post added successfully" });
});

app.get('/api/get-posts', (req: any, res: any) => {
    res.json({ posts });
});

app.put('/api/edit-post', (req: any, res: any) => {
    const { id, title, text, image } = req.body;
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ error: "Post not found" });
    }

    if (title !== undefined) post.title = title;
    if (text !== undefined) post.text = text;
    if (image !== undefined) post.image = image;

    res.status(200).json({ message: "Post updated successfully" });
});

app.delete('/api/delete-post', (req: any, res: any) => {
    const { id } = req.body;
    const index = posts.findIndex((p) => p.id === id);
    
    if (index === -1) {
        return res.status(404).json({ error: "Post not found" });
    }

    posts.splice(index, 1);
    res.status(200).json({ message: "Post deleted successfully" });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
