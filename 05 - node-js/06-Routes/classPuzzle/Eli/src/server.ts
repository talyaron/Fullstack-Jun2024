import express from 'express';
const app = express();
const port = process.env.PORT || 3000;





app.use(express.json()); // takes the header of the request and if it is json it will parse it into an object and attach it to the request object (req.body)
//header -> req.body

app.use(express.static('public'));

//routesD
import usersRoutes from './routes/usersRoutes';
app.use("/api/users", usersRoutes);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
