import { Request, Response } from 'express';
import Comment from '../../model/comments/commentModel';

export const addComment = async (req: Request, res: Response): Promise<undefined> => {
    try {
        const { client, product, text, score} = req.body;
        if (!client || !product || !text || !score) {
            res.status(400).json({ message: 'Please provide all the required fields' });
            return;
        }

        const newComment = new Comment({
            client, 
            product, 
            text,
            score
        });

        const savedComment = await newComment.save();

        res.status(201).json(savedComment);
        return;
    } catch (error) {
        res.status(500).json({ message: 'Failed to add comment', error });
        return;
    }
};