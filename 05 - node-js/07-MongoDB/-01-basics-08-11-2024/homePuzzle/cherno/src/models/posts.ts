import { model, Schema } from "mongoose";

export const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    text: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
});

export const PostModel = model('Post', PostSchema);