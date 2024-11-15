import mongoose, { Schema, Document } from 'mongoose';

interface IPost extends Document {
    title: string;
    text: string;
    imageURL: string;
}

const postSchema = new Schema<IPost>({
    title: { type: String, required: true },
    text: { type: String, required: true },
    imageURL: { type: String, required: true },
});

export const PostModel = mongoose.model<IPost>('Post', postSchema);
