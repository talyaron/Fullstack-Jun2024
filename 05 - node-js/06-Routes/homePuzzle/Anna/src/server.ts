import express from 'express';
import { title } from 'process';
import { Post } from './Model/postModel';
import  postRouter  from './routers/postRouter';
const app = express()
const port = process.env.PORT || 3000


app.use(express.json()); //middleware to get data from the body
app.use(express.static('public')) //middleware
app.use("/api/users",postRouter);





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
