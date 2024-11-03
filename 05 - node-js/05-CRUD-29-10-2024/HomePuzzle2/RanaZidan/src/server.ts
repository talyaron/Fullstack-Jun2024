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
    
    console.log('Received POST request:', req.body);  

    if (!title || !text || !imageURL) {
        return res.status(400).json({ error: "All fields (title, text, imageURL) are required" });
    }

    posts.push({ title, text, imageURL });

    console.log('Current posts:', posts); 

    res.status(201).json({ message: "Post added successfully" });
});

app.get('/api/get-posts', (req:any, res:any) => {
    res.json({ posts });
});

app.delete('/api/delete-post/:index', (req: any, res: any) => {
    const index = parseInt(req.params.index);
    
    console.log('Attempting to delete post at index:', index);

    if (isNaN(index) || index < 0 || index >= posts.length) {
        console.log('Invalid index:', index);
        return res.status(400).json({ error: "Invalid index" });
    }

    const deletedPost = posts.splice(index, 1); 

    console.log('Post deleted at index:', index);
    console.log('Deleted post:', deletedPost);
    console.log('Current posts:', posts);

    res.status(200).json({ message: "Post deleted successfully" });
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
