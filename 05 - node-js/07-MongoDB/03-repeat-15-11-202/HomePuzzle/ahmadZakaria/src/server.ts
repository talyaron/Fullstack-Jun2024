import express from "express"
import mongoose from "mongoose"

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/',(req,res) => {
    res.send("hello world")
});

const dbUrl='mongodb+srv://AhmadZakaria:Ziv242242@ahmadzakaria.72bnj.mongodb.net';
const database = 'client';

mongoose
    .connect(`${dbUrl}/ ${database}`)
    .then(()=>{
        console.info('connecteing to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


import ClientsRouter from './routes/ClientsRouter';
app.use("/api/clients", ClientsRouter);

import AdminRoute from './routes/AdminRoute';
app.use("/api/admins", AdminRoute);


app.listen(port, ()=>{
    console.log(`🚀Server is running on port ${port}`);
});