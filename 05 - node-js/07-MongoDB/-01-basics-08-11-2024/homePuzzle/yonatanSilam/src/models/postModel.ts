import { model, Schema } from "mongoose";

export interface Post {
    imageUrl: string;
    text: string;
    title: string;
    id: string;
  }
  export const allPosts: Post[] = [];

  export const PostSchema = new Schema({
    imageUrl: {
        type: String,
        required: true
    }, 
    text: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    }
})

export const PostModel = model('Post', PostSchema);