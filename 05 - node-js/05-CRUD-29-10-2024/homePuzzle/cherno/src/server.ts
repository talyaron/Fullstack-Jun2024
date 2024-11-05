import express from 'express';
const app = express()
const port = process.env.PORT || 3000

app.use(express.json()); //middleware to get data from the body
app.use(express.static('public')) //middleware


interface Post
{
    id: string;
    title: string;
    text: string;
    image: File;
}

interface User
{
    id: string;
    username: string;
    password: string;
}

interface UserPost
{
    userId: string;
    postId: string;
}

const users: User[] = [];
const posts: Post[] = [];
const usersPosts: UserPost[] = [];

//**********routes*********
app.get('/api/get-posts', (req, res)=>{

    try{
        res.send({posts: posts});

    } catch(error){
        console.error(error);
    }
})

app.get('/api/get-user-posts', (req, res)=>{

    try{
        const user = req.query.user as string;
        if(!user) throw new Error("User not found")

        const userPostsId = usersPosts.filter(up => up.userId === user)
        const userPosts = userPostsId.map(up => posts.find(post => post.id === up.postId))

        res.send({posts: userPosts});

    } catch(error){
        console.error(error);
    }
})

app.post("/api/send-post", (req:any, res:any) => {
    try {
        const data = req.body.data;
        const user = req.body.user;

        if(!data) throw new Error("No post found");
        posts.push(data);
        console.log(data.image)

        usersPosts.push({userId: user, postId: data.id})

        res.send({message: "post received"});

    } catch (error) {
        console.error(error);
        res.status(500).send({message: "Error"});   
    }
});

app.post("/api/register-user", (req:any, res:any) => {
    try
    {   const data = req.body.data;
        if(!createUser(data.username, data.password)) res.send({ifCreated: false});

        else res.send({ifCreated: true});
    }
    catch(error)
    {
        console.error(error);
        res.status(500).send({message: `Error registering user: ${error}`});
    }
});

app.post("/api/login-user", (req:any, res:any) => {
    try
    {   const data = req.body.data;

        res.send(loginUser(data.username, data.password));
    }
    catch(error)
    {
        console.error(error);
        res.status(500).send({message: `Error registering user: ${error}`});
    }
});

app.patch("/api/edit-post", (req:any, res:any) => {
    try
    {
        const data = req.body;
        if(!data) throw new Error("No data found");

        const postId = data.postId;
        const type = data.type;
        const content = data.content;

        const postIndex = posts.findIndex((post) => post.id === postId);
        if(postIndex === -1) throw new Error("Post not found");

        if(type === "title") posts[postIndex].title = content;
        else if(type === "text") posts[postIndex].text = content;
        else if(type === "image") posts[postIndex].image = content;
        else throw new Error("Invalid type");

        res.send({message: "Post updated successfully"});
    }
    catch(error)
    {
        console.error(error);
        res.status(500).send('Error updating post');
    }
});

app.delete("/api/delete-post", (req:any, res:any) => {
    try
    {
        const postId = req.body.postId;

        const postIndex = posts.findIndex((post) => post.id === postId);
        if(postIndex === -1) throw new Error("Post not found");

        usersPosts.forEach((up, index) => {if(up.postId === postId) usersPosts.splice(index ,1)});

        posts.splice(postIndex, 1);

        res.send({message: "Post deleted successfully"});
    }
    catch(error)
    {
        console.error(error);
        res.status(500).send('Error deleting post');
    }
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

function createUser(username: string, password: string): boolean
{
    if (users.find(u => u.username === username)) return false;

    const newUser = {id: crypto.randomUUID(), username: username, password: password}
    users.push(newUser);

    return true;
}

function loginUser(username: string, password: string)
{
    const user = users.find(u => u.username === username && u.password === password);

    if(user) return {isLoggedIn: true, userId: user.id};

    return {isLoggedIn: false};
}