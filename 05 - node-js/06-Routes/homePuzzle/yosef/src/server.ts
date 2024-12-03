import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const port = 3000;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// let posts: Array<{ title: string, text: string, imageURL: string, id:string }> = [];

app.use(bodyParser.json());
app.post('/upload-image-endpoint', upload.single('image'), (req: any, res: any) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }

    // לדוגמה, נחזיר את כתובת ה-URL של התמונה (בהנחה שאתה שומר את התמונה בשרת)
    const imageUrl = `/uploads/${req.file.filename}`;
    res.json({ imageUrl });
    console.log('imahe', imageUrl);
});

//Routes // includ: add/get/delete/editText/editTitle/
import usersPostRoutes from './routes/postsRoutes';
app.use("/api/posts", usersPostRoutes);

app.use(express.static('public'));

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/register', 'register.html'));
  });

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login', 'index.html'));
  });

app.get('/mainPage', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/mainPage', 'main.html'));
});
  
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
