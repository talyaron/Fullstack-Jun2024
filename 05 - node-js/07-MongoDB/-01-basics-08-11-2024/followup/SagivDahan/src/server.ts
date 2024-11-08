import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json()); // takes the header of the request and if it is json it will parse it into an object and attach it to the request object (req.body)
//header -> req.body

app.use(express.static('public'));

//DB
const dbUrl = "mongodb+srv://adhcsvi1:sagiv123@cluster0.qyh2p.mongodb.net/"
const database = 'fs-jun24';

mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
});

//routesD
import usersRoutes from './routes/postssRoutes';
app.use("/api/users", usersRoutes);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
