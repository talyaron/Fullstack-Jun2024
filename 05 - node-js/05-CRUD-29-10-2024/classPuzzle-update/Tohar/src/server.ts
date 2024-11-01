import express from 'express';
import bodyParser from 'body-parser';
import { randomBytes } from 'crypto';

const app = express();
const port = process.env.PORT || 3000;

const posts: Array<{ title: string, text: string, imageURL: string, id:string }> = [];

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

//updates the post's title
app.patch('/api/update-post', (req: any, res:any) => {

    try {
        const { title, id } = req.body;
        const postId = id;

        const post = posts.find(id => id.id === postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.title = title;
        return res.json({ message: 'Title updated successfully', post });
    
    } catch(error) {
        console.error("Error in /api/update-post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    } 
});
