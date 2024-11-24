import { model, Schema } from "mongoose";

export let posts: Array<{ title: string, text: string, imageURL: string, id:string }> = [];

export const PostSchema = new Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
    imageURL: { type: String, required: true },
});

export const PostModel = model("Post", PostSchema);

