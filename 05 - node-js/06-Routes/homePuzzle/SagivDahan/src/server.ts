import express from 'express';
import bodyParser from 'body-parser';
import postRoutes from './routes/postRoutes';

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.static('public'));


app.use("/api/post", postRoutes);

app.listen(port, () => {
    console.log(`Server listening on: https://localhost:${port}`);
});

