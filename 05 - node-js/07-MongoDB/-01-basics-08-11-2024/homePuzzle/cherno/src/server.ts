import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';

const app = express()
const port = process.env.PORT || 3000

app.use(express.json()); //middleware to get data from the body
app.use(express.static('public')) //middleware

const dburl = "mongodb+srv://dancherno9:kjYUm3eCBAraSVOW@cluster0.lrej6.mongodb.net"
const db = 'insta';

mongoose.connect(`${dburl}/${db}`).then(()=>
{
    console.log("DB connected")
}).catch((err) => 
{
    console.error("Error connecting to db: " + err);
});

app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
