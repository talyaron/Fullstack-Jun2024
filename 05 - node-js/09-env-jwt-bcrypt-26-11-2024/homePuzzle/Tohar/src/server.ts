import express from 'express'
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';  
import dotenv from 'dotenv';
import clientsRouter from './routes/clients/clientRoutes';
import productsRouter from './routes/products/productRoute';
import commentsRouter from './routes/comments/commentsRoute';
import Purchase from "./routes/purchase/purchaseRouter";

dotenv.config();
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

//DB
export const dbUrl = process.env.DB_URL;
const database = process.env.DB_NAME;


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