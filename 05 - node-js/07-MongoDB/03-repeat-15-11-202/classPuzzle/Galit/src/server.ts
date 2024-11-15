import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;



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

app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

import clientRouter from './routes/ClientRoute';
app.unsubscribe("/api/clients", clientRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
