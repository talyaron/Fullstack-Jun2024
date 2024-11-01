    import express from 'express';
import path from 'path';
    const app = express();
    const port = process.env.PORT || 3000

    app.use(express.static((path.join(__dirname, '../public')))) // ?
    app.use(express.json());

    interface Post {
        imageUrl: string;
        text: string;
    }

const allPosts:Post[]=[];   

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

app.get('/api/get-posts', (req: any, res: any) => {
    res.send({ allPosts });
});

app.post("/api/send-post", (req:any, res:any) => {
    try {
        const {imageUrl,text} = req.body;
        if (!imageUrl || !text) throw new Error("Missing imageUrl or text");

        const newPost: Post = { imageUrl, text };
        allPosts.push(newPost); //?

        res.send({ message: "Post received", allPosts });
    } catch (error) {
        console.error(error);
        res.status(400).send({ message: "Error: " + (error as Error).message });
    }
});