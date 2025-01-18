import { PostModel, posts } from "../../Model/postModel";


export async function getPosts(req : any,res : any){
    try {
        const posts = await PostModel.find({});
        //console.log('Currect posts',posts)
        console.log(posts);
        res.send({existPost: "posts send to client",posts});
    } catch (error) {
        console.error(error);
    }
};