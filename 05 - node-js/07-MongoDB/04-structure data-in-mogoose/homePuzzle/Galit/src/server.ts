import express from 'express'
import mongoose from "mongoose";  
const app = express()
const port = 3000;

app.use(express.json());
app.use(express.static('public'));



// MongoDB connection
const dbUrl = 'mongodb+srv://galitccga:q4wlV111QcHSFkDZ@cluster0.sevm84o.mongodb.net';
const database = 'client-app';

mongoose
  .connect(`${dbUrl}/${database}`)
  .then(() => {
    console.info('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });



import clientRouter from './routes/ClientRoute';
app.use("/api/clients", clientRouter);

import adminRouter from './routes/AdminRoute';
app.use("/api/admins", adminRouter);

import serviceRouter from './routes/ServiceRoute';
app.use("/api/services", serviceRouter);

import appointmentRouter from './routes/AppointmentRoute';
app.use("/api/appointments", appointmentRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
