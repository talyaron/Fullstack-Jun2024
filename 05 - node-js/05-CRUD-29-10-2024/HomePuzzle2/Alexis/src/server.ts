import express from 'express';
import mongoose from 'mongoose';
import crypto from 'crypto';  // for generating post IDs
import postRoutes from './routes/postRoutes';  // Import your post routes

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));  

const dbUrl = "mongodb+srv://alexisv:Preobra30@cluster0.fqmwt.mongodb.net";
const database = 'fs-jun24';

mongoose.connect(`${dbUrl}/${database}`).then(() => {
    console.info("DB connected");
}).catch((err) => {
    console.error("DB connection failed:", err);
});

// Use the postRoutes for handling routes related to posts
app.use("/api/posts", postRoutes);  

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
