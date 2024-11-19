import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter";

const app = express();
const port = 3002;

app.use(express.json());
app.use(express.static("public"));

app.get('/', (req, res)=>{
    res.send('hello')
})

const dbUrl = "mongodb+srv://matan_benoon:Mhfc1913@cluster0.q0nio.mongodb.net";
const database = "practice";

mongoose
    .connect(`${dbUrl}/${database}`)
    .then(() => console.info("DB connected"))
    .catch((err) => {
        console.error("DB connection error:", err);
        process.exit(1);
    });

app.use("/api/users", userRouter);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
