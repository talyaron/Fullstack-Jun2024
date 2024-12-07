import express from 'express';
import { title } from 'process';
const app = express()
const port = process.env.PORT || 3000


app.use(express.json()); //middleware to get data from the body
app.use(express.static('public')) //middleware






interface Post {
    title : string,
    des : string,
    img: string
    id : string
}
const posts: Post [] = [];
app.post("/api/send-posts",(req : any,res : any) =>{
    try {
        const postData = req.body;
        if(!postData.dataTitle) throw new Error("Title not found");
        if(!postData.dataDes) throw new Error("Des not found");
        posts.push({title: postData.dataTitle, des: postData.dataDes,img: postData.dataImg,id: postData.id});
        res.send({message: "Post add seccusefuly",posts})

    } catch (error) {
        console.error(error);
        res.status(500).send({message: "Error"});   
    }
});

app.patch("/api/edit-posts",(req : any,res :any) =>{
    try {
        const {id,title,allPosts} = req.body;
        if(!id || !title) throw new Error("post not found");
        const post = posts.find((post) => post.id === id);
        if(!post){
            console.log("post not found",id);
            return res.status(404).json({ success: false, message: `Post with id ${id} not found.` });
        }
        post.title = title;
        res.send({message:"Title updated successfully",posts});

    } catch (error) {
        console.error(error);
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
