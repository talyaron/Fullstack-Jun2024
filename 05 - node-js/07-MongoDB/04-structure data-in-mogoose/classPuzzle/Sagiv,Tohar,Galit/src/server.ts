import express from 'express'
import mongoose from "mongoose";  
import commentsRouter from './routes/comments/commentsRoute';
import productsRouter from './routes/products/productRoute';
import clientsRouter from './routes/clientsRoutes/clientRoutes';
import OrderRouter from './routes/Orders/OrderRouter'
const app = express()
const port = 3000;


app.use(express.json());
app.use(express.static('public'));

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

app.use("/api/clients", clientsRouter);
app.use("/api/products", productsRouter);
app.use("/api/comments", commentsRouter);
app.use("/api/orders", OrderRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})