import multer from "multer";
import path from "path";
import crypto from 'crypto';

export interface Post {
  id: string;
  title: string;
  text: string;
  image: string;
}

export const posts: Post[] = [];

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: (req, file, cb) => {
      cb(null, `${crypto.randomUUID()}${path.extname(file.originalname)}`);
  }
});
export const upload = multer({ storage });
