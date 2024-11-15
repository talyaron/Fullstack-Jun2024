import express from 'express';
import { userRoutes } from './routes/userRoutes';
import mongoose, { mongo } from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));
app.use("/api/users/", userRoutes)


const dataurl = 'mongodb+srv://rrrgrg304:R6pZjl029YQvhaSi@cluster0.pw3xh.mongodb.net';
const dbname = 'fs-jun24';

mongoose.connect(`${dataurl}/${dbname}`).then(() => {
    console.log(`DataBase: ${dbname} is connected!`)
}).catch((error) => {
    console.log(error)
})
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
