import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 3000;



app.use(express.json()); // takes the header of the request and if it is json it will parse it into an object and attach it to the request object (req.body)
//header -> req.body

app.use(express.static('public'));

//DB
const dbUrl = "mongodb+srv://yonatans02424:NB0YtPMbc0p8GkDS@cluster0.zsbrf.mongodb.net"
const database = 'classPuzzlePets';

//connection
mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});

//routesD
import usersRoutes from './routes/usersRoutes';
app.use("/api/users", usersRoutes);
import petsRoutes from './routes/petsRoutes';
app.use("/api/pets", petsRoutes);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});