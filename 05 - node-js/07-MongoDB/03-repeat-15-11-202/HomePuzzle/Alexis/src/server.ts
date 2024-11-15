import express from 'express'
import mongoose from 'mongoose';
const app = express()
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const dbUrl = "mongodb+srv://tal:k8w0S6ztTx3zowGW@cluster0.0hzknon.mongodb.net"
const database = 'fs-jun24';

//connection
mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});


import clientsRouter from "./routes/userRoutes/clientRoutes";
app.use("/api/clients", clientsRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})