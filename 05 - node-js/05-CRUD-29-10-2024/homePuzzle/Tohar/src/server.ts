import express from 'express';
const app = express()
const port = process.env.PORT || 3000



app.use(express.json()); //middleware to get data from the body
app.use(express.static('public')) //middleware


const posts: string[] = [];
// route to send something to the server
app.post("/api/post", (req:any, res:any) => {
    try {
        const data = req.body;

        if(!data.posts) throw new Error("No post found");
        posts.push('f', data.post);

        console.log(data);
        res.send({message: "Post created", data});
    } catch (error) {
        console.error(error);
        res.status(500).send({message: "Error"});   
    }
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});