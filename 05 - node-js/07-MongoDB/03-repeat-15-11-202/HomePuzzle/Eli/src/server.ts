import express from "express";
import mongoose from 'mongoose';

const app =express();
const port = process.env.PORT || 3000;

app.use(express.json()); 
app.use(express.static('public'));

const dbUrl = "mongodb+srv://elizigi876:x3vH4Q9ksJyOKUs9@cluster0.x9hqo.mongodb.net"
const database = 'fs-jun24';


mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});

import clientRoutes from "./routes/clientRoutes";
app.use("/api/client", clientRoutes);

app.listen(port,()=>
{
console.log(`server listening on port ${port} `)
});