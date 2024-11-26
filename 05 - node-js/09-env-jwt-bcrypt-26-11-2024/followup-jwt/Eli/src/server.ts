import express from 'express'
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';  
const app = express()
const port = 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//DB
const dbUrl = "mongodb+srv://tal:k8w0S6ztTx3zowGW@cluster0.0hzknon.mongodb.net"
const database = 'fs-jun24';

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
import Purchase from "./routes/purchase/purchaseRouter";
app.use("/api/purchase", Purchase);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})