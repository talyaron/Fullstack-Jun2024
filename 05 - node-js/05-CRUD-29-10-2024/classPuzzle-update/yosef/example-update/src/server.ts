import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

let posts: Array<{ title: string, text: string, imageURL: string, id:string }> = [];

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/add-posts', (req: any, res: any) => {
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

app.get('/api/get-posts', (req, res) => {
    res.json({ posts });
});


app.patch('/api/update', (req: any, res: any) => {
    const { id, title } = req.body;
    
    const post = posts.find(p => p.id === id);

    if (post) {
        post.title = title;
        console.log('Updated post:', post);
        res.status(200).json({ message: "Post updated successfully" });
        console.log("Post updated successfully");
        console.log(posts)
    }
    else {
        res.status(404).json({ error: "Post not found" });
    }
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
