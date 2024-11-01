import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public')) 


interface Post {
  id: number;
  title: string;
  text: string;
  imageUrl: string;
}

const posts: Post[] = [];

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/api/posts", (req, res) => {
  res.json(posts);
});


app.post("/api/posts", (req: any, res: any) => {
  const { title, text, imageUrl } = req.body;

  if (!title || !text || !imageUrl) {
    return res
      .status(400)
      .json({ error: "Title, text, and image URL are required." });
  }

  const newPost: Post = { id: posts.length + 1, title, text, imageUrl };
  posts.push(newPost);

  res.status(201).json(newPost);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
