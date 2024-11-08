import express from 'express';
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';

const app = express()
const port = process.env.PORT || 3000

app.use(express.json()); //middleware to get data from the body
app.use(express.static('public')) //middleware

app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
