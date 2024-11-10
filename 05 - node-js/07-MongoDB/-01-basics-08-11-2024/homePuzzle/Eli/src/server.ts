import express, { response } from "express";
const app = express();
const port = process.env.PORT || 3000;

import mongoose from 'mongoose';
app.use(express.json());
app.use(express.static("public"));
import multer from "multer";
import path from "path";
import fs from "fs";

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/register", "register.html"));
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/login", "login.html"));
});

//npm i multer...
//npm i --save-dev @types/multer

//stuff for image upload

const dbUrl = "mongodb+srv://elizigi876:x3vH4Q9ksJyOKUs9@cluster0.x9hqo.mongodb.net"
const database = 'fs-jun24';

mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});


export const uploadsDir = path.join(__dirname, "uploads");
app.use("/uploads", express.static(uploadsDir));

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});
import userRoutes from "./routes/userRoutes";
import postsRoutes from "./routes/postsRoutes";
import { checkedLoggedUsers } from "./controllers/userControllers/userTimeOutCont";

app.use("/api/users", userRoutes);
app.use("/api/post", postsRoutes);

setInterval(checkedLoggedUsers, 3000);

app.listen(port, () => {
  console.log(`Example unstagram app listening on port ${port}`);
});
