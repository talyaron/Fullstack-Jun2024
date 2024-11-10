import express from 'express';
import bodyParser from 'body-parser';
import postRoutes from './routes/postRoutes';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));
app.use("/api/post", postRoutes);

//DB CONNETCTION
const dbUrl = "mongodb+srv://adhcsvi1:sagiv123@cluster0.qyh2p.mongodb.net"
const database = 'InstaClone';

mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});

app.listen(port, () => {
    console.log(`Server listening on: https://localhost:${port}`);
});

