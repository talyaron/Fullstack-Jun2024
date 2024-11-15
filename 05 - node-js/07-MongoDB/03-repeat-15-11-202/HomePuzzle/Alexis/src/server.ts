import express from 'express'
import mongoose from 'mongoose';
const app = express()
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const dbUrl = "mongodb+srv://alexisv:Preobra30@cluster0.fqmwt.mongodb.net"
const database = 'fs-jun24';

//connection
mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected");
}).catch((err)=>{
    console.error(err)
});


import clientsRouter from "./routes/clientRoutes";
app.use("/api/users", clientsRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})