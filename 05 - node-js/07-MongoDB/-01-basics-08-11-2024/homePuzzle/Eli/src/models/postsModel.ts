import { model, Schema } from "mongoose";
const mongoose = require("mongoose");

// export interface Post {
//   id: string;
//   title: string;
//   description: string;
//   img: string;
//   creatorId:string;
//   creatorName:string;
//   userMade?: boolean;
// }

export const postSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  creatorId: {
    type: String,
    required: false,
  },
  creatorName: {
    type: String,
    required: false,
  },
  userMade: {
    type: Boolean,
    required: false,
  },
});

// export const posts: Post[] = [];

export const PostModel = model("Post", postSchema); 
