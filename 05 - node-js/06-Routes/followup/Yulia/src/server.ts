import express from 'express';
import bodyParser from 'body-parser';
import userRouters from './routers/userRouters';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api/users', userRouters);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});