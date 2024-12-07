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
        console.log('Updated posts:',posts)
    } catch (error) {
        console.error(error);
        res.status(500).send({message: "Error"});   
    }
});

app.patch("/api/edit-title",(req : any,res :any) =>{
    try {
        const {id,title,des} = req.body;
        if(!id || !title) throw new Error("post not found");
        const post = posts.find((post) => post.id === id);
        if(!post){
            console.log("post not found",id);
            return res.status(404).json({ success: false, message: `Post with id ${id} not found.` });
        }
        post.title = title;
        console.log('Updated post:',post,title);
        res.send({message:"Title updated successfully",posts});

    } catch (error) {
        console.error(error);
    }
});

app.patch("/api/edit-text",(req : any,res :any) =>{
    try {
        const {id,des} = req.body;
        if(!id || !des) throw new Error("post not found");
        const post = posts.find((post) => post.id === id);
        if(!post){
            console.log("post not found",id);
            return res.status(404).json({ success: false, message: `Post with id ${id} not found.` });
        }
        post.des = des;
        console.log('Updated post:',post,des);
        res.send({message:"Title updated successfully",posts});

    } catch (error) {
        console.error(error);
    }
});
app.get("/api/get-posts",(req : any,res : any)=>{
    try {
        console.log('Currect posts',posts)
        res.send({existPost: "posts send to client",posts});
    } catch (error) {
        console.error(error);
    }
})

app.delete("/api/delete-posts",(req : any,res : any) =>{
    const {id} = req.body;
    if(!id) throw new Error("post not found");
    const deletedIndex = posts.findIndex((post) => post.id === id)
    if(deletedIndex ==-1){
        throw new Error("Post not found");
    }
    posts.splice(deletedIndex,1);
    res.json("Post deleted from the server");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
