import express from 'express';
import { title } from 'process';
import { Post } from './Model/postModel';
import  postRouter  from './routers/postRouter';
import mongoose from 'mongoose';
const app = express()
const port = process.env.PORT || 3000


app.use(express.json()); //middleware to get data from the body
app.use(express.static('public')) //middleware
app.use("/api/users",postRouter);


const dbUrl = "mongodb+srv://annapetrovitsky:CUA5rKNGRSDqqUOE@course.l5x0p.mongodb.net"
const database = 'instaPuzzle';

//connection
mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
