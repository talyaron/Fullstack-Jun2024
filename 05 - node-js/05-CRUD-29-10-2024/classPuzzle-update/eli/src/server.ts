import express from "express";
import bodyParser from "body-parser";

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

  console.log("Current posts:", posts);

  res.status(201).json({ message: "Post added successfully" });
});
app.post("/api/update-post", (req: any, res: any) => {
  const { pId, title } = req.body;

  console.log("Received POST request:", req.body);

  if (!title || !pId) {
    return res
      .status(400)
      .json({ error: "All fields (title, text, imageURL) are required" });
  }
  const foundPost = posts.find((post) => post.id === pId);
  if (foundPost) {
    foundPost.title = title;
  }
  console.log("Current posts:", posts);

  res.status(201).json({ message: "Post added successfully" });
});


app.post("/api/delete-post", (req: any, res: any) => {
    const { pId } = req.body;
  
    console.log("Received POST request:", req.body);
  
    if (!pId) {
      return res
        .status(400)
        .json({ error: "All fields (id) are required" });
    }
    const indexOfPost = posts.findIndex((post) => post.id === pId);
    if (indexOfPost !== -1) { 
      posts.splice(indexOfPost, 1);
    }
    console.log("Current posts:", posts);
  
    res.status(201).json({ message: "Post added successfully" });
  });

app.get("/api/get-posts", (req, res) => {
  res.json({ posts });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});