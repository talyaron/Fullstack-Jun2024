import express from 'express'
import mongoose from "mongoose";  
const app = express()
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//DB
const dbUrl = "mongodb+srv://yosefib88:FYdIUMhMIwGscX4y@cluster0.b5vsm.mongodb.net"
const database = 'Clients & Service Provider & Appoitments';

//connection
mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});

//routes
import clientsRouter from './routes/clientsRoutes/clientRoutes';
app.use("/api/clients", clientsRouter);

import serviceProviderRouter from './routes/serviceProvider/serviceProviderRoutes';
app.use("/api/serviceProviders", serviceProviderRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})