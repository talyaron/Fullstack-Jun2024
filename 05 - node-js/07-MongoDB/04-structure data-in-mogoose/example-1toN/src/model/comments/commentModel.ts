import mongoose, { Schema, Document } from 'mongoose';

interface IComment extends Document {
    user: mongoose.Schema.Types.ObjectId;
    text: string;
    createdAt: Date;
    score: number;
}

const CommentSchema: Schema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, //foreign key to user
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, //foreign key to product
    text: { type: String, required: true },
    score: { type: Number, required: true, min: 1, max: 5 },
    createdAt: { type: Date, default: Date.now }
});

const Comment = mongoose.model<IComment>('Comment', CommentSchema);

export default Comment;