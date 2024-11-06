import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = process.env.PORT || 3000;

import userRoutes from './routes/usersRoutes'



app.use(bodyParser.json());
app.use(express.static('public'));


app.use('/api/users',userRoutes );

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
