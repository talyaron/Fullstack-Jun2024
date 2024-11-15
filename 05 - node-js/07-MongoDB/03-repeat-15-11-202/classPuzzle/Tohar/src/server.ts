import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
// import userRouter from './routes/usersRouter';
// import appRouter from './routes/appRouter';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// app.use("/api/user", userRouter);
// app.use("/api/appointment", appRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


const dbUrl = "mongodb+srv://toharkenin:SGPMKViHdfAEDEY1@cluster0.bbpiv.mongodb.net"
const database = 'booking';

mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});