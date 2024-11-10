import express from 'express';
import { postRoutes } from './routes/postRoutes';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;

// טל עשיתי שאתה יכול להתחבר עם 0.0.0.0 הכול טוב.
const databaseUrl = 'mongodb+srv://rrrgrg304:R6pZjl029YQvhaSi@cluster0.pw3xh.mongodb.net';
const database = 'fs-jun24';

mongoose.connect(`${databaseUrl}/${database}`).then(() => {
    console.log(`Database: ${database} is connected !`)
}).catch((error) => {
    console.error(error)
})

app.use(express.json());
app.use(express.static('public'));
app.use("/api/users/", postRoutes)

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
