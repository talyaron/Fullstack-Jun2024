import express from 'express';
const app = express()
const port = process.env.PORT || 3000

interface Post
{
    id: string;
    title: string;
    text: string;
    image: string;
}


app.use(express.json()); //middleware to get data from the body
app.use(express.static('public')) //middleware

const posts: Post[] = [];
//route
app.get('/api/get-posts', (req, res)=>{

    try{
        res.send({posts: posts});

    } catch(error){
        console.error(error);
    }
})

// route to send something to the server
app.post("/api/send-post", (req:any, res:any) => {
    try {
        const data = req.body.data;

        console.log(data);

        if(!data) throw new Error("No post found");
        posts.push(data);

        res.send({message: "post received"});

    } catch (error) {
        console.error(error);
        res.status(500).send({message: "Error"});   
    }
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});