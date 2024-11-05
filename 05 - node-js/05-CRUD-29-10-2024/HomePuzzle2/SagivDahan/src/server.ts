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
        if (!post) throw new Error("No post found");
        posts.push(post);
        console.log({post});
        res.send({ message: "Post created", post });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error creating post" });
    }
});

app.delete("/api/delete-post/:id", (req, res) => {
    const postId = req.params.id;
    const postIndex = posts.findIndex(post => post.id === postId);

    if (postIndex !== -1) {
        posts.splice(postIndex, 1);
        res.send({ message: "Post deleted successfully." });
    } else {
        res.status(404).send({ message: "Post not found." });
    }
});

app.put("/api/update-post/:id", (req, res) => {
    const postId = req.params.id;
    const { post } = req.body;

    const postIndex = posts.findIndex((p) => p.id === postId);
    if (postIndex !== -1) {
        posts[postIndex] = post;
        res.send({ message: "Post updated successfully", post });
    } else {
        res.status(404).send({ message: "Post not found." });
    }
});


app.get('/api/get-posts', (req, res) => {
    res.json({ posts });
});

app.listen(port, () => {
    console.log(`Server listening on: https://localhost:${port}`);
});

