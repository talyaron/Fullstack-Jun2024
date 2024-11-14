import { model, Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId;

export const UserPostSchema = new Schema({
    userId: {
        type: ObjectId,
        required: true
    }, 
    postId: {
        type: ObjectId,
        required: true
    }
})

export const UserPostModel = model('UserPost', UserPostSchema);