import  express, { response }  from "express";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json()); 
app.use(express.static("public"));
import multer from 'multer';
import path from 'path';
import fs from 'fs'; 
//npm i multer...
//npm i --save-dev @types/multer

//stuff for image upload
const uploadsDir = path.join(__dirname, 'uploads'); 

if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true }); 
}
app.use('/uploads', express.static(uploadsDir));


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, uploadsDir); 
  },
  filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); 
  }
});
const upload = multer({ storage: storage });


interface PostRequestBody {
    word: string;
}

interface Post {
  id:string;
  title: string;
  description: string;
  img: string;
}

const posts:Post[]=[];


app.get("/api/get-posts",(reg,res)=>
{
try {
  
  res.json({ posts });
} catch (error: unknown) {
    if (error instanceof Error) {
        res.status(500).json({ error: error.message });
    } else {
        res.status(500).json({ error: 'An unknown error occurred.' });
    }
}
});

app.post("/api/add-post", upload.single('image'), (req: express.Request<{}, PostRequestBody>, res: express.Response) => {
  try {
    const { title,description } = req.body;
        const img = req.file ? req.file.filename : ""; // Get the image filename

      if (!title) throw new Error("No word found");
      // Log the full path of the uploaded image
      console.log(`Uploaded image path: ${path.join(uploadsDir, img)}`);

      if (img) {
          console.log(`Received word: ${title} ${description}, Image: ${img}`);
          const newPost = {id:`id=${crypto.randomUUID()}`,title,description, img }; // Create a new post object
          posts.unshift(newPost);
        
          // Here you would typically save newPost to a database or an array
          console.log(newPost); // Log the new post for debugging

          res.json({ message: 'Word and image uploaded successfully!', newPost });
      } else {
        console.log(`Received word: ${title} ${description}, Image: no image`);
        const newPost = {id:`id=${crypto.randomUUID()}`,title,description, img }; // Create a new post object
          posts.unshift(newPost);
      }
  } catch (error: unknown) {
      if (error instanceof Error) {
          res.status(500).json({ error: error.message });
      } else {
          res.status(500).json({ error: 'An unknown error occurred.' });
      }
  }
});


app.listen(port, () => {
    console.log(`Example unstagram app listening on port ${port}`);
  });