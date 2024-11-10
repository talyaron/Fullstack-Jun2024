import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/usersRouter';
import postRouter from './routes/postsRouter';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.use("/api/user", userRouter);
app.use("/api/post", postRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// // app.get('/api/get-user', (req:any, res:any) => {

// //     const { email } = req.query;
// //     const user = users.find(user => user.email === email);

// //     if (!user) {
// //         return res.status(400).json({ error: "User not found" });
// //     }

// //     res.json(user);

// // });
// app.get('/api/get-user', (req:any, res:any) => {

//     const { email, password } = req.query;
//     const user = users.find(user => user.email === email);
    
//     if (!user) {
//         return res.status(400).json({ error: "User not found" });
//     }
//     const passwordNotCorrect = user.password !== password;
//     if(user.password !== password) {
//         return res.status(400).json({ error: "Incorrect password" });
//     }

//     res.json({ exists: passwordNotCorrect });

// });

// app.get('/api/get-posts', (req, res) => {
//     res.json({ posts });
// });



// app.patch('/api/update-post-image', (req: any, res:any) => {

//     try {
//         const { image, id } = req.body;
//         const postId = id;
//         console.log('id', id);

//         const post = posts.find(id => id.id === postId);
//         if (!post) {
//             return res.status(404).json({ message: 'Post not found' });
//         }
//         post.imageURL = image;
//         return res.json({ message: 'image updated successfully', post });
    
//     } catch(error) {
//         console.error("Error in /api/update-post:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     } 
// });


// app.delete('/api/delete-post', (req: any, res: any) => {
//     try {
//         const { id } = req.body;
//         const postId = id;

//         const index = posts.findIndex(id => id.id === postId);
//         console.log('index', index)
//         if (index === -1) {
//             return res.status(404).json({ message: 'Post not found' });
//         }
        
//         posts.splice(index, 1);

//         //find the post in the array and delete it
//         return res.json({ message: 'Post deleted successfully', posts });
    
//     } catch(error) {
//         console.error("Error in /api/update-post:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     } 
// });

