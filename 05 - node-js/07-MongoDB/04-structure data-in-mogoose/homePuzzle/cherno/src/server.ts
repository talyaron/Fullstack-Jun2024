import express from 'express'
import mongoose from "mongoose";  
const app = express()
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

//DB
const dbUrl = "mongodb+srv://dancherno9:kjYUm3eCBAraSVOW@cluster0.lrej6.mongodb.net"
const database = 'apointme';

//connection
mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});

//routes
import clientsRouter from './routes/client/clientRoutes';
app.use("/api/clients", clientsRouter);

import appointmentRouter from './routes/apointment/apointmentRoutes';
app.use("/api/apointments", appointmentRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})