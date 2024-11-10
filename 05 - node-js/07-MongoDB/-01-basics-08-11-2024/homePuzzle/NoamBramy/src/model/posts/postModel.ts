import multer from "multer";
import path from "path";
import crypto from 'crypto';
import { model, Schema } from "mongoose";



const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: (req, file, cb) => {
      cb(null, `${crypto.randomUUID()}${path.extname(file.originalname)}`);
  }
});
export const upload = multer({ storage });

export const postSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  text: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});


export const PostModel = model("Post", postSchema) 