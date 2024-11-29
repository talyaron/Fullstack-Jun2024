import express from 'express'
import mongoose from 'mongoose';
const app = express()
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const dbUrl = "mongodb+srv://yonatans02424:NB0YtPMbc0p8GkDS@cluster0.zsbrf.mongodb.net"

const database = 'homePuzzle-appointment';

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
