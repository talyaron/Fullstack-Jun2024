import exp from "constants";
import { PostModel, posts } from "../../Model/postModel";
import mongoose from "mongoose";



export async function sendPost(req : any,res : any){
    try {
        const {dataTitle,dataDes,dataImg} = req.body;
        if(!dataTitle) throw new Error("Title not found");
        if(!dataDes) throw new Error("Des not found");
       //posts.push({title: postData.dataTitle, des: postData.dataDes,img: postData.dataImg,id: postData.id});
        const newPost = new PostModel({title: dataTitle,des: dataDes,img: dataImg});
        await newPost.save();
        res.send({message: "Post add seccusefuly",posts})
        console.log('Updated posts:',posts)
    } catch (error) {
        console.error(error);
        res.status(500).send({message: "Error"});   
    }
};

export async function editPostTitle(req : any,res :any) {
    try {
        const {id,title,des} = req.body;
        if(!id || !title) throw new Error("post not found"); 
        console.log(id);
        const post = await PostModel.findByIdAndUpdate(
            id,                  
            { title:title },          
            { new: true }        
        );
        if(!post){
            console.log("post not found",id);
            return res.status(404).json({ success: false, message: `Post with id ${id} not found.` });
        }
        //post.title = title;
        console.log('Updated post:',post,title);
        res.send({message:"Title updated successfully",posts});

    } catch (error) { 
        console.error(error);
    }
};

export async function editPostText(req : any,res :any) {
    try {
        const {id,des} = req.body;
        if(!id || !des) throw new Error("post not found");
        const post = await PostModel.findByIdAndUpdate(
            id,                  
            { des:des },          
            { new: true }        
        );
        if(!post){
            console.log("post not found",id);
            return res.status(404).json({ success: false, message: `Post with id ${id} not found.` });
        }
        //post.des = des;
        console.log('Updated post:',post,des);
        res.send({message:"Title updated successfully",posts});

    } catch (error) {
        console.error(error);
    }
};

export async function deletePosts(req : any,res : any) {
    try {
        const {id} = req.body;
        if(!id) throw new Error("post not found");
        const post = await PostModel.findByIdAndDelete(id);   
        if (!post) {
            return res.status(404).json({ success: false, message: `Post with ID ${id} not found.` });
        } 
        console.log("Deleted post:", post);
        res.status(200).json({ success: true, message: "Post deleted successfully", post: post });
    } catch (error : any) {
        console.error("Error deleting post:", error.message);
        res.status(500).json({ success: false, message: "Error deleting post", error: error.message });
    }
};

export async function editImgPost(req : any,res :any) {
    try {
        const {id,newImg} = req.body;
        if(!id) throw new Error("post not found");
        const post = await PostModel.findByIdAndUpdate(
            id,                  
            { img:newImg },          
            { new: true }        
        );
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