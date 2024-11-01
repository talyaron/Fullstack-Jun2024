import express from 'express';
import bodyParser from 'body-parser';
import { randomBytes } from 'crypto';  

const app = express();
const port = process.env.PORT || 3000;

const posts: Array<{ title: string, text: string, imageURL: string, id: string }> = [];

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/add-post', (req:any, res: any) => {
    try {
        const { title, text, imageURL } = req.body;

        if (!title || !text || !imageURL) {
            return res.status(400).json({ error: "All fields (title, text, imageURL) are required" });
        }

        const id = randomBytes(16).toString("hex"); 
        posts.push({ id, title, text, imageURL });

        res.status(201).json({ message: "Post added successfully" });
    } catch (error) {
        console.error("Error in /api/add-post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get('/api/get-posts', (req, res) => {
    res.json({ posts });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


app.put('/api/edit-post', (req:any, res:any) => {
    const { id, title, text } = req.body;
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ error: "Post not found" });
    }

    post.title = title;
    post.text = text;

    res.status(200).json({ message: "Post updated successfully" });
});