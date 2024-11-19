import { Request, Response } from 'express';
import orderModel from '../../model/order/orderModel';

export const addOrder = async (req: Request, res: Response): Promise<undefined> => {
    try {
        const { client, product} = req.body;
        if (!client || !product ) {
            res.status(400).json({ message: 'Please provide all the required fields-' });
            return;
        }

        const newOrder = new orderModel({
            client, 
            product
        });

        const savedOrder = await newOrder.save();

        res.status(201).json(savedOrder);
        return;
    } catch (error) {
        res.status(500).json({ message: 'Failed to add order', error });
        return;
    }
};