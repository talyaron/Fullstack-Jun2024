import { users } from "../../models/userModel";
import multer from "multer";
import path from "path";
import fs from "fs";
import { posts } from "../../models/postsModel";
import { uploadsDir } from "../../server";


// Set up multer storage and configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir); // The correct directory for saving the uploaded files
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)); // Make the filename unique
  },
});

export const upload = multer({ storage: storage }); 

export function addPost(req: any, res: any) {
  try {
    const { title, description, key } = req.body;
    const img = req.file ? req.file.filename : ""; // Get the image filename

    if (!title) throw new Error("No word found");
    // Log the full path of the uploaded image
    console.log(`Uploaded image path: ${path.join(uploadsDir, img)}`);
    const postCreator = users.find((user) => key === user.key);
    if (!postCreator) {
      res.json({ message: "invalid user key no post made" });
      return;
    }
    const creatorId = postCreator.id;
    const creatorName = postCreator.name;
    if (img) {
      console.log(`Received word: ${title} ${description}, Image: ${img}`);
      const fullBodyImg = `http://localhost:3000/uploads/${img}`; 
        const newPost = {
        id: `id=${crypto.randomUUID()}`,
        title,
        description,
        img: fullBodyImg,
        creatorId,
        creatorName,
      }; 
      posts.unshift(newPost);

      // Here you would typically save newPost to a database or an array
      console.log(newPost); // Log the new post for debugging

      res.json({ message: "Word and image uploaded successfully!", newPost });
    } else {
      console.log(
        `Received word: ${title} ${description}, Image: no image by creator id${creatorId}`
      );
      const newPost = {
        id: `id=${crypto.randomUUID()}`,
        title,
        description,
        img,
        creatorId,
        creatorName,
      }; // Create a new post object
      posts.unshift(newPost);
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred." });
    }
  }
}
//  
