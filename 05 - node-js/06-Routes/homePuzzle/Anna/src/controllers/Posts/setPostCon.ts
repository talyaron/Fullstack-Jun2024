import exp from "constants";
import { posts } from "../../Model/postModel";


export function sendPost(req : any,res : any){
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
};

export function editPostTitle(req : any,res :any) {
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
};

export function editPostText(req : any,res :any) {
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
};

export function deletePosts(req : any,res : any) {
    const {id} = req.body;
    if(!id) throw new Error("post not found");
    const deletedIndex = posts.findIndex((post) => post.id === id)
    if(deletedIndex ==-1){
        throw new Error("Post not found");
    }
    posts.splice(deletedIndex,1);
    res.json("Post deleted from the server");
};

export function editImgPost(req : any,res :any) {
    try {
        const {id,newImg} = req.body;
        if(!id) throw new Error("post not found");
        const post = posts.find((post) => post.id === id);
        if(!post){
            console.log("post not found",id);
            return res.status(404).json({ success: false, message: `Post with id ${id} not found.` });
        }
        post.img = newImg;
        console.log('Updated post:',post,newImg);
        res.send({message:"Img updated successfully",posts});

    } catch (error) {
        console.error(error);
    }
};