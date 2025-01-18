import { Schema, model } from "mongoose";
import { title } from "process";

export interface Post {
    title : string,
    des : string,
    img: string
    id : string
}

export const posts: Post [] = [];

export const PostSchema = new Schema({
    title: String,
    des: String,
    img: String
});

export const PostModel = model('Post',PostSchema);