import { posts } from "../../Model/postModel";


export function getPosts(req : any,res : any){
    try {
        console.log('Currect posts',posts)
        res.send({existPost: "posts send to client",posts});
    } catch (error) {
        console.error(error);
    }
};