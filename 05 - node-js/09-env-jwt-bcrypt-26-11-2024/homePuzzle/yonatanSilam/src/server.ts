import express from 'express'
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';  
import 'dotenv/config'

const app = express()
const port = 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());


app.get('/', (req, res) => {
  res.send('Hello World!')
})


const dbUrl = process.env.DB_URL;

const database = process.env.DATABASE;

//connection
mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});


import userRoutes from "./routes/userRoutes";
app.use("/api/users", userRoutes);

import sPRoutes from "./routes/sPRoutes";
app.use("/api/sP", sPRoutes);

import appointmentRoutes from "./routes/appointmentRoutes";
app.use("/api/appointment", appointmentRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
