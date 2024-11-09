// server.ts

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import postsRoute from './routes/postsRoute';
import userRoute from './routes/userRoute';


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// שימוש בקבצי הנתיבים
app.use("/api",postsRoute);
app.use("/api",userRoute);



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
