import express from "express";
import mongoose from 'mongoose';
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../public"))); // ?
app.use(express.json());

const dbUrl = "mongodb+srv://yonatans02424:NB0YtPMbc0p8GkDS@cluster0.zsbrf.mongodb.net"
const database = 'homePuzzle11-11';


mongoose.connect(`${dbUrl}/${database}`).then(()=>{
  console.info("DB connected")
}).catch((err)=>{
  console.error(err)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

import postsRoutes from './routes/postRoutes';
app.use("/api/posts", postsRoutes);





