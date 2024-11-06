import express from 'express';
import postRouter from "./routes/postsRoutes";
import userRouter from "./routes/usersRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // takes the header of the request and if it is json it will parse it into an object and attach it to the request object (req.body)
//header -> req.body

app.use(express.static("public")); // serve static files from the public folder

// routes
app.use("/api/posts", postRouter); // all routes for posts will start with /api/posts
app.use("/api/users", userRouter); // all routes for users will start with /api/users

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
