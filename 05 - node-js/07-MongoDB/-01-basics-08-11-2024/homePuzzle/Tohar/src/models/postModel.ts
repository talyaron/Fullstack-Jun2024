import { model, Schema } from "mongoose";

export type Post = {
    caption: string,
    imageURL: string, 
    id:string
};

export const posts: Post[] = [];

export const PostSchema = new Schema({
        caption: {
            type: String,
            required: true
        }, 
        imageURL: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
    });

export const PostModel = model('Post', PostSchema);