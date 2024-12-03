import express from "express";
import path from "path";
import { allPosts, Post } from "./models/postModel";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../public"))); // ?
app.use(express.json());


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

import postsRoutes from './routes/postRoutes';
app.use("/api/posts", postsRoutes);





