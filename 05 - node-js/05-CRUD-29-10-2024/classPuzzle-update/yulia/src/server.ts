import express from 'express';
import bodyParser from 'body-parser';
import crypto from 'crypto';

const app = express();
const port = process.env.PORT || 3000;

const posts: Array<{
  title: string;
  text: string;
  imageURL: string;
  id: string;
}> = [];

app.use(bodyParser.json());
app.use(express.static("public"));
console.log("Server code is running");


// add a new post
app.post("/api/add-post", (req: any, res: any) => {
  const { title, text, imageURL } = req.body;

  console.log("Received POST request:", req.body);

  if (!title || !text || !imageURL) {
    return res
      .status(400)
      .json({ error: "All fields (title, text, imageURL) are required" });
  }

  const id = crypto.randomUUID();
  posts.push({ id, title, text, imageURL });

  res.status(201).json({ message: "Post added successfully" });
});

// get all posts
app.get("/api/get-posts", (req, res) => {
  res.json({ posts });
});

// renew the title of a post
app.patch("/api/update-title", (req: any, res: any) => {
  console.log("Received request to update title");

  const { id, title } = req.body;
  if(!id || !title)  throw new Error("id and title are required");

  const post = posts.find((post) => post.id === id);
  if (!post) {
    console.log("Post not found with id:", id);
    return res.status(404).json({ error: "Post not found" });
  }

  post.title = title;
  console.log("Updated post title:", post);

  res.status(200).json({ message: "Title updated successfully" });
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
