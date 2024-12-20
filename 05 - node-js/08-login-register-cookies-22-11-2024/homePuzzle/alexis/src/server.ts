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
const dbUrl = "mongodb+srv://alexisv:vivalexxxa@cluster0.fqmwt.mongodb.net/"
const database = 'fs';

//connection
mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});

//routes
import clientsRouter from './routes/clients/clientRoutes';
app.use("/api/clients", clientsRouter);
import productsRouter from './routes/products/productRoute';
app.use("/api/products", productsRouter);
import commentsRouter from './routes/comments/commentsRoute';
app.use("/api/comments", commentsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})