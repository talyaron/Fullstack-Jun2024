
import { model, Schema } from "mongoose";

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