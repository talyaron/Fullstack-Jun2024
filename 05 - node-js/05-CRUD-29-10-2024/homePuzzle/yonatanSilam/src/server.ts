import express from "express";
import path from "path";
import { title } from "process";
// import { userConnect } from '../public/index';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../public"))); // ?
app.use(express.json());

interface Post {
  imageUrl: string;
  text: string;
  title: string;
  id: string;
}
interface PostUser{
    newPost:Post;
    userConnect:User;
}

 interface User {
    username: string;
    password: string;
    email: string;
    phone: string;
    id: string;
 }
const allPosts: Post[] = [];
const allPostUser:PostUser[]=[];


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/api/get-posts", (req: any, res: any) => {
  res.send({ allPosts });
});

app.post("/api/send-post", (req: any, res: any) => {
  try {
    const { imageUrl, text, title } = req.body;
    if (!imageUrl || !text || !title)
      throw new Error("Missing imageUrl or text");

    const id = crypto.randomUUID();
    const newPost: Post = { imageUrl, text, title, id };
    allPosts.push(newPost); //?
    // const postUser: PostUser = { newPost, userConnect };
    // allPostUser.push(postUser)
    res.send({ message: "Post received", allPosts });
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: "Error: " + (error as Error).message });
  }
});
app.patch("/api/update-post", (req: any, res: any) => {
  try {
    const { title, id } = req.body;
    if (!title || !id) throw new Error("Missing title ");

    const uPost = allPosts.find((post) => post.id == id);
    if (!uPost) throw new Error("not find post");
    uPost.title = title;

    res.send({ message: "Post received", allPosts });
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: "Error: " + (error as Error).message });
  }
});
app.patch("/api/updateText-post", (req: any, res: any) => {
    try {
      const { text, id } = req.body;
      if (!text || !id) throw new Error("Missing title ");
  
      const uPost = allPosts.find((post) => post.id == id);
      if (!uPost) throw new Error("not find post");
      uPost.text = text;
  
      res.send({ message: "Post received", allPosts });
    } catch (error) {
      console.error(error);
      res.status(400).send({ message: "Error: " + (error as Error).message });
    }
  });
  app.patch("/api/updateImage-post", (req: any, res: any) => {
    try {
      const { imageUrl, id } = req.body;
      if (!imageUrl || !id) throw new Error("Missing title ");
  
      const uPost = allPosts.find((post) => post.id == id);
      if (!uPost) throw new Error("not find post");
      uPost.imageUrl = imageUrl;
  
      res.send({ message: "Post received", allPosts });
    } catch (error) {
      console.error(error);
      res.status(400).send({ message: "Error: " + (error as Error).message });
    }
  });
app.delete("/api/delete-post", (req: any, res: any) => {
  try {
    const { id } = req.body;
    if (!id) throw new Error("Missing title ");

    const uPostIndex = allPosts.findIndex((post) => post.id == id);
    if (uPostIndex == -1) throw new Error("not find post");
    allPosts.splice(uPostIndex, 1);
    res.send({ message: "Post received", allPosts });
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: "Error: " + (error as Error).message });
  }
});
