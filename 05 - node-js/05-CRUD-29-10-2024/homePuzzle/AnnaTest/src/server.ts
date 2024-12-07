import express from 'express';
const app = express()
const port = process.env.PORT || 3000


app.use(express.json()); //middleware to get data from the body
app.use(express.static('public')) //middleware






interface Post {
    title : string,
    des : string,
    img: string
}
const posts: Post [] = [];
app.post("/api/send-posts",(req : any,res : any) =>{
    try {
        const postData = req.body;
        if(!postData.dataTitle) throw new Error("Title not found");
        if(!postData.dataDes) throw new Error("Des not found");
        posts.push({title: postData.dataTitle, des: postData.dataDes,img: postData.dataImg});
        res.send({message: "Post add seccusefuly",posts})

    } catch (error) {
        console.error(error);
        res.status(500).send({message: "Error"});   
    }
});

app.get("/api/get-posts",(req : any,res : any)=>{
    try {
        res.send({existPost: "posts send to client",posts});
    } catch (error) {
        console.error(error);
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
