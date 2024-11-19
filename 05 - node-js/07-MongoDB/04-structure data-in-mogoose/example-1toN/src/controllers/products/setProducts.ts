import { Request, Response } from 'express';
import Product from '../../model/products/productModel';

export const addProduct = async (req: Request, res: Response) => {
    try {
        const { name, price, description } = req.body;

        const newProduct = new Product({
            name,
            price,
            description
        });

        const savedProduct = await newProduct.save();

        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error saving product', error });
    }
};