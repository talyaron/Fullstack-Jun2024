import { model, Schema } from "mongoose";

//data structure
export const post = new Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true
    }
})

// model => collection
// collection name is 'posts' by default
export const PostModel = model('Post', post);