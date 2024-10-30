import express from 'express';
const app = express()
const port = process.env.PORT || 3000
import multer from 'multer';
import path from 'path';
import fs from 'fs'; 

app.use(express.json()); //middleware to get data from the body
app.use(express.static('public')) //middleware


const uploadsDir = path.join(__dirname, 'uploads'); // Adjust the path as needed

if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true }); // Create the uploads directory
}
app.use('/uploads', express.static(uploadsDir));

app.get('/api/renderWords', (req, res)=>{

    try{
        // setTimeout(() => {
  
        res.send({message: words});
        // }, 3000);
    } catch(error){
        console.error(error);
    }
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir); // Use the uploadsDir variable
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // Preserve file extension
    }
});

interface Post
{
    word:string;
    img:any;
}
const words: Post[] = [];
// route to send something to the server
const upload = multer({ storage: storage });

// Define a type for the request body
interface PostRequestBody {
    word: string;
}//route
// Handle POST request to upload word and image
app.post("/api/send-word", upload.single('img'), (req: express.Request<{}, {}, PostRequestBody>, res: express.Response) => {
    try {
        const { word } = req.body; // Get the word from the request body
        const img = req.file ? req.file.filename : ""; // Get the image filename

        if (!word) throw new Error("No word found");

        // Log the full path of the uploaded image
        console.log(`Uploaded image path: ${path.join(uploadsDir, img)}`);

        if (img) {
            console.log(`Received word: ${word}, Image: ${img}`);
            const newPost = { word, img }; // Create a new post object
            words.unshift(newPost);
            // Here you would typically save newPost to a database or an array
            console.log(newPost); // Log the new post for debugging

            res.json({ message: 'Word and image uploaded successfully!', newPost });
        } else {
            res.status(400).json({ error: 'No image uploaded.' });
            const newPost = { word, img }; // Create a new post object
            words.unshift(newPost);
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
    console.log(`Example app listening on port ${port}`)
});