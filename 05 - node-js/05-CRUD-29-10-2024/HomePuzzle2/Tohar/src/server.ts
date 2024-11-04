import express from 'express';
import bodyParser from 'body-parser';
import { randomBytes } from 'crypto'; 

const app = express();
const port = process.env.PORT || 3000;

type Post = {
    caption: string,
    imageURL: string, 
    id:string
};

type User = {
    userName: string;
    id : string;
    email: string;
    password: string;
    phoneNumber?: string;
    posts: Post[];
}

const posts: Post[] = [];
const users: User[] = [];

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/add-user', (req: any, res: any) => {
    try {
        const {  userName, email, password, phoneNumber } = req.body;

        if ( !userName || !email || !password || !phoneNumber) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const id = randomBytes(16).toString("hex"); 
        const posts: Post[] = [];
        users.push({userName, id, email, password, phoneNumber, posts});
        console.log(users);
        res.status(201).json({ message: "User added successfully" });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while adding the user" });
    }
});

app.post('/api/login', (req: any, res: any) => {
    try {
        const {email, password } = req.body;

        const user = users.find(user => user.email === email);

        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        if(user.password !== password) {
            return res.status(400).json({ error: "Incorrect password" });
        }

    } catch (error) {
        console.error("Error in /api/login:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


// app.get('/api/get-user', (req:any, res:any) => {

//     const { email } = req.query;
//     const user = users.find(user => user.email === email);

//     if (!user) {
//         return res.status(400).json({ error: "User not found" });
//     }

//     res.json(user);

// });
app.get('/api/get-user', (req:any, res:any) => {

    const { email, password } = req.query;
    const user = users.find(user => user.email === email);
    
    if (!user) {
        return res.status(400).json({ error: "User not found" });
    }
    const passwordNotCorrect = user.password !== password;
    if(user.password !== password) {
        return res.status(400).json({ error: "Incorrect password" });
    }

    res.json({ exists: passwordNotCorrect });

});

app.get('/api/user-exists', (req:any, res:any) => {
    const { email } = req.query;

    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }
    const userExists = users.some(user => user.email === email);
    console.log('userExists', userExists);
    res.json({ exists: userExists });
    
});

app.post('/api/add-post', (req:any, res: any) => {
    try {
        const { caption, imageURL } = req.body;

        if ( !caption || !imageURL) {
            return res.status(400).json({ error: "All fields (title, text, imageURL) are required" });
        }

        const id = randomBytes(16).toString("hex"); 
        posts.push({ id, caption, imageURL });

        res.status(201).json({ message: "Post added successfully" });
    } catch (error) {
        console.error("Error in /api/add-post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get('/api/get-posts', (req, res) => {
    res.json({ posts });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

//updates the post's caption
app.patch('/api/update-post', (req: any, res:any) => {

    try {
        const { caption, id } = req.body;
        const postId = id;

        const post = posts.find(id => id.id === postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.caption = caption;
        return res.json({ message: 'Caption updated successfully', post });
    
    } catch(error) {
        console.error("Error in /api/update-post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    } 
});

app.patch('/api/update-post-image', (req: any, res:any) => {

    try {
        const { imageURL, id } = req.body;
        const postId = id;

        const post = posts.find(id => id.id === postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.imageURL = imageURL;
        return res.json({ message: 'image updated successfully', post });
    
    } catch(error) {
        console.error("Error in /api/update-post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    } 
});


app.delete('/api/delete-post', (req: any, res: any) => {
    try {
        const { id } = req.body;
        const postId = id;

        const index = posts.findIndex(id => id.id === postId);
        console.log('index', index)
        if (index === -1) {
            return res.status(404).json({ message: 'Post not found' });
        }
        
        posts.splice(index, 1);

        //find the post in the array and delete it
        return res.json({ message: 'Post deleted successfully', posts });
    
    } catch(error) {
        console.error("Error in /api/update-post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    } 
});

