import express from 'express';
const app = express()
const port = process.env.PORT || 3000
const crypto = require('crypto') 

app.use(express.json()); //middleware to get data from the body
app.use(express.static('public')) //middleware

interface Posts{
    id: string
    title: string
    text: string
    image: string
}

const posts: Posts[] = [];


//route
app.get('/api/get-posts', (req, res) => {
    try {
        const postsData = posts.map(post => ({
            title: post.title,
            text: post.text,
            image: post.image,
        }));
        res.send(postsData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving posts');
    }
});



function addPost(id:string, title:string, text:string, image:string){
    return {id, title, text, image}
}


app.post("/api/send-form", (req, res) => {
    try {
        const data = req.body;
        if (!data.title || !data.text || !data.image) throw new Error("Missing post data");

        posts.push(addPost(crypto.randomUUID(), data.title, data.text, data.image));
        console.log(posts);

        res.send({ message: "Post successfully received", posts });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error receiving post data" });
    }
});





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});