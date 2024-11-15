import {Post} from "./postModel";
import {User} from "./userModel";

export  interface PostUser{
    newPost:Post;
    userConnect:User;
}
export const allPostUser:PostUser[]=[];
