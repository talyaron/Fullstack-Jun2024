import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/usersRouter';
import appointmentsRouter from './routes/appointmentsRouter';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.use("/api/user", userRouter);
app.use("/api/appointment",appointmentsRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

const dbUrl = process.env.DB_URL;
const database = 'booking';

mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});