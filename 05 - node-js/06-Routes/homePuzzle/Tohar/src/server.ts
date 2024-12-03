import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/usersRouter';
import postRouter from './routes/postsRouter';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.use("/api/user", userRouter);
app.use("/api/post", postRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

