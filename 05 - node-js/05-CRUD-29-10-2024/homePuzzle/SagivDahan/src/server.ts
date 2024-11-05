import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.static('public'));

const posts:any[] = [];

app.post("/api/add-post", (req, res) => {
    try {
        const { post } = req.body;
        // ודא שהנתונים מכילים פוסט
        if (!post) throw new Error("No post found");

        // הוספת הפוסט למערך
        posts.push(post);

        console.log({post});
        res.send({ message: "Post created", post });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error creating post" });
    }
});

app.get('/api/get-posts', (req, res) => {
    res.json({ posts });
});

app.listen(port, () => {
    console.log(`Server listening on: https://localhost:${port}`);
});

