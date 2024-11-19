import mongoose, { Schema, Document } from 'mongoose';

interface IComment extends Document {
    user: mongoose.Schema.Types.ObjectId;
    text: string;
    createdAt: Date;
}

const CommentSchema: Schema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Comment = mongoose.model<IComment>('Comment', CommentSchema);

export default Comment;