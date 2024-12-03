import express from 'express';
import router from './routes/userRoute';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use("/api/user", router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
