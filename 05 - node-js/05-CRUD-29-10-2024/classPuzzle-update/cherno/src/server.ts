import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

const posts: Array<{ title: string, text: string, imageURL: string, id:string }> = [];

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/add-post', (req: any, res: any) => {
    const { title, text, imageURL } = req.body;
    
    console.log('Received POST request:', req.body);  

    if (!title || !text || !imageURL) {
        return res.status(400).json({ error: "All fields (title, text, imageURL) are required" });
    }

    const id = crypto.randomUUID();
    posts.push({id, title, text, imageURL });

    console.log('Current posts:', posts); 

    res.status(201).json({ message: "Post added successfully" });
});

app.patch('/api/update-title', (req: any, res: any) => {
    try
    {
        console.log('Received update title Patch request:', req.body);
        const id = req.body.id;
        const newTitle = req.body.title;

        const postIndex = posts.findIndex((post) => post.id === id);

        if (postIndex === -1) throw new Error("couldnt find post")

        posts[postIndex].title = newTitle;
    }
    catch (error)
    {
        console.error(error);
        res.status(500).send('Error updating post title');
    }
});

app.get('/api/get-posts', (req, res) => {
    res.json({ posts });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
