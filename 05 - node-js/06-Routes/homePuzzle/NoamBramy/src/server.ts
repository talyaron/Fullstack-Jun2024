import express from 'express';
import { postRoutes } from './routes/postRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));
app.use("/api/users/", postRoutes)

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
