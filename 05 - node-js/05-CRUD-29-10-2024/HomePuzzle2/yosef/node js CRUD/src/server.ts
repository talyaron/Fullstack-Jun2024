import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const port = 3000;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

let posts: Array<{ title: string, text: string, imageURL: string, id:string }> = [];

app.post('/upload-image-endpoint', upload.single('image'), (req: any, res: any) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }

    // לדוגמה, נחזיר את כתובת ה-URL של התמונה (בהנחה שאתה שומר את התמונה בשרת)
    const imageUrl = `/uploads/${req.file.filename}`;
    res.json({ imageUrl });
    console.log('imahe', imageUrl);
});


app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/register', 'register.html'));
  });

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login', 'index.html'));
  });

app.get('/mainPage', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/mainPage', 'main.html'));
  });
  

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


app.patch('/api/updateTitle', (req: any, res: any) => {
    const { id, title } = req.body;
    
    const post = posts.find(p => p.id === id);

    if (post) {
        post.title = title;
        console.log('Updated title post:', post);
        res.status(200).json({ message: "Post title updated successfully" });
        console.log("Post updated successfully");
        console.log(posts)
    }
    else {
        res.status(404).json({ error: "Post not found" });
    }
});

app.patch('/api/updateText', (req: any, res: any) => {
    const { id, text } = req.body;
    
    const post = posts.find(p => p.id === id);
    
    if (post) {
        post.text = text;
        console.log('Updated text post:', post);
        res.status(200).json({ message: "Post text updated successfully" });
        console.log("Post updated successfully");
        console.log(posts)
    }
    else {
        res.status(404).json({ error: "Post not found" });
    }
});

app.delete('/api/delete-post', (req: any, res: any) => {
    const { id } = req.body;
    
    const postIndex = posts.findIndex(p => p.id === id);
    
    if (postIndex === -1) {
        return res.status(404).json({ error: "Post not found" });
    }
    
    posts.splice(postIndex, 1);
    console.log('Deleted post:', posts[postIndex]);
    res.status(200).json({ message: "Post deleted successfully" });
    console.log("Post deleted successfully");
    console.log(posts)
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
