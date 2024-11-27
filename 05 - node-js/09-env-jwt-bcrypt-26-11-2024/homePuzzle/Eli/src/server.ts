import express from "express";
import mongoose from 'mongoose';
import 'dotenv/config';
import cookieParser from 'cookie-parser'; 

const app = express();
const port = process.env.PORT || 3000;
app.use(cookieParser());

app.use(express.json()); 
app.use(express.static('public'));

export const dbUrl = process.env.DB_URL
const database = 'fs-jun24';


mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});

import clientRoutes from "./routes/clientRoutes";
app.use("/api/client", clientRoutes);
import providerRoutes from "./routes/providerRoutes";
app.use("/api/provider", providerRoutes);
import appointmentRoutes from "./routes/appointmentRoutes";
app.use("/api/appointment", appointmentRoutes);

app.listen(port,()=>
{
console.log(`server listening on port ${port} `)
});