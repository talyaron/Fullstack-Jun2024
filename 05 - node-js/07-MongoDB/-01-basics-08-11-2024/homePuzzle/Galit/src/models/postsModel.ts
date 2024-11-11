
import { model, Schema } from "mongoose";

export default class Post {
    id: string;
    title: string;
    text: string;
    image: string;

    constructor(title: string, text: string, image: string) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.text = text;
        this.image = image;
    }
}

export const posts: Post[] = [];

export const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    text: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    }
})

export const PostModel = model('Post', PostSchema);