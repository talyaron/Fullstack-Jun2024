import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());

const posts: Array<{ title: string, text: string, imageURL: string }> = [];

app.use(bodyParser.json());
app.use(express.static('public'));


app.post('/api/add-post', (req: any, res: any) => {
    const { title, text, imageURL } = req.body;
    
    if (!title || !text || !imageURL) {
        return res.status(400).json({ error: "All fields are required" });
    }

    posts.push({ title, text, imageURL });
    res.status(201).json({ message: "Post added successfully" });
});


app.get('/api/get-posts', (req: any, res: any) => {
    res.json({ posts });
});


app.put('/api/update-post/:index', (req: any, res: any) => {
    const index = parseInt(req.params.index);
    const { title, text, imageURL } = req.body;
    
    if (isNaN(index) || index < 0 || index >= posts.length) {
        return res.status(400).json({ error: "Invalid index" });
    }

    if (title) posts[index].title = title;
    if (text) posts[index].text = text;
    if (imageURL) posts[index].imageURL = imageURL;

    res.status(200).json({ message: "Post updated successfully" });
});


app.delete('/api/delete-post/:index', (req: any, res: any) => {
    const index = parseInt(req.params.index);
    
    if (isNaN(index) || index < 0 || index >= posts.length) {
        return res.status(400).json({ error: "Invalid index" });
    }

    posts.splice(index, 1);
    res.status(200).json({ message: "Post deleted successfully" });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});