import express from 'express'
import mongoose from 'mongoose'
const app = express()
const port = 3001

app.use(express.json())
app.use(express.static("public"))



app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

const dbUrl = "mongodb+srv://matan_benoon:Mhfc1913@cluster0.q0nio.mongodb.net";
const database = 'practice';

mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
}); 

import userRouter from "./routers/userRouter"
app.use("/api/users",userRouter )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})