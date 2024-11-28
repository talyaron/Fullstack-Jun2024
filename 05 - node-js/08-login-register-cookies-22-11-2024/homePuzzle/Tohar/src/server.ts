import express from 'express'
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';  
import clientsRouter from './routes/clients/clientRoutes';
import productsRouter from './routes/products/productRoute';
import commentsRouter from './routes/comments/commentsRoute';
import Purchase from "./routes/purchase/purchaseRouter";

const app = express()
const port = 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

//DB
const dbUrl = "mongodb+srv://toharkenin:Q9cij3M4GHk%409Sx@cluster0.bbpiv.mongodb.net"
const database = 'fs-jun24';

//connection
mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});

//routes
app.use("/api/clients", clientsRouter);
app.use("/api/products", productsRouter);
app.use("/api/comments", commentsRouter);
app.use("/api/purchase", Purchase);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})