import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(express.static('public'));


app.use("/api/users", userRoutes);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
