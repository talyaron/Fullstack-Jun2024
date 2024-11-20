import express from 'express'
import mongoose from "mongoose";  
const app = express()
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const dataurl = 'mongodb+srv://rrrgrg304:R6pZjl029YQvhaSi@cluster0.pw3xh.mongodb.net';
const dbname = 'fs-jun24';

mongoose.connect(`${dataurl}/${dbname}`).then(() => {
    console.log(`DataBase: ${dbname} is connected!`)
}).catch((error) => {
    console.log(error)
})
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});

//routes
import clientsRouter from './routes/clients/clientRoutes';
app.use("/api/clients", clientsRouter);
import appointmentRouter from './routes/appointment/appointmentRoutes';
app.use("/api/appointments", appointmentRouter);
import serivceProviderRoutes from './routes/serviceprovider/serviceProviderRoutes';
app.use("/api/serviceprovider", serivceProviderRoutes);