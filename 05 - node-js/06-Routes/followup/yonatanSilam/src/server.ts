import express from 'express';
// import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;


import usersRoutes from './routes/usersRoutes';

app.use(express.json());
app.use(express.static('public'));

app.use("/api/users",usersRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});










// const posts: Array<{ title: string, text: string, imageURL: string, id:string }> = [];

// app.use(bodyParser.json());
// app.use(express.static('public'));

// app.post('/api/add-post', (req: any, res: any) => {
//     const { title, text, imageURL } = req.body;
    
//     console.log('Received POST request:', req.body);  

//     if (!title || !text || !imageURL) {
//         return res.status(400).json({ error: "All fields (title, text, imageURL) are required" });
//     }

//     const id = crypto.randomUUID();
//     posts.push({id, title, text, imageURL });

//     console.log('Current posts:', posts); 

//     res.status(201).json({ message: "Post added successfully" });
// });

// app.get('/api/get-posts', (req, res) => {
//     res.json({ posts });
// });

// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// });
