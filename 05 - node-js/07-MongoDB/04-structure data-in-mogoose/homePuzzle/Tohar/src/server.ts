import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/usersRouter';
import providerRouter from './routes/providerRouter';
import serviceRouter from './routes/serviceRouter';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.use("/api/user", userRouter);
app.use("/api/provider", providerRouter);
app.use("/api/service", serviceRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


const dbUrl = "mongodb+srv://toharkenin:Q9cij3M4GHk%409Sx@cluster0.bbpiv.mongodb.net"
const database = 'booking';

mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});