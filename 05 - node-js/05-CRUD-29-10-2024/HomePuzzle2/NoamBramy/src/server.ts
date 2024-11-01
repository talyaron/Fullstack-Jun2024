import express from 'express';
import multer from 'multer';
import crypto from 'crypto';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

interface Post {
    id: string;
    title: string;
    text: string;
    image: string;
}

const posts: Post[] = [];

const storage = multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => {
        cb(null, `${crypto.randomUUID()}${path.extname(file.originalname)}`);
    }
});
const upload = multer({ storage });

function addPost({ id, title, text, image }: Post): Post {
    return { id, title, text, image };
}

app.get('/api/get-posts', (req, res) => {
    try {
        const postsData = posts.map(post => ({
            id: post.id,
            title: post.title,
            text: post.text,
            image: post.image,
        }));
        res.send(postsData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving posts');
    }
});

app.post("/api/send-form", (req, res) => {
    try {
        const { title, text, image } = req.body;
        if (!title || !text || !image) throw new Error("Missing post data");

        const newPost = addPost({ id: crypto.randomUUID(), title, text, image });
        posts.push(newPost);

        res.send({ message: "Post successfully created", posts });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error creating post" });
    }
});

app.put('/api/update-post/:id', (req:any, res:any) => {
    try {
        const { id } = req.params;
        const { title, text, image } = req.body;
        const postIndex = posts.findIndex(post => post.id === id);

        if (postIndex === -1) return res.status(404).send('Post not found');

        posts[postIndex] = { ...posts[postIndex], title, text, image };
        res.send({ message: 'Post successfully updated', posts });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating post');
    }
});

app.delete('/api/delete-post/:id', (req:any, res:any) => {
    try {
        const { id } = req.params;
        const postIndex = posts.findIndex(post => post.id === id);

        if (postIndex === -1) return res.status(404).send('Post not found');

        posts.splice(postIndex, 1);
        res.send({ message: 'Post successfully deleted', posts });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting post');
    }
});

app.post('/api/upload-image', upload.single('image'), (req, res) => {
    try {
        if (!req.file) throw new Error('Image upload failed');
        const imageUrl = `/uploads/${req.file.filename}`;
        res.send({ message: 'Image successfully uploaded', imageUrl });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error uploading image' });
    }
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
