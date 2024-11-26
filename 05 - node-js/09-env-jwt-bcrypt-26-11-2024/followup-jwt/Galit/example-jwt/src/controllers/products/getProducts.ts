import Product from "../../model/products/productModel";
import jwt from 'jwt-simple';
import {secret} from '../clients/setClients'

export async function getMyProducts(req: any, res: any) {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(401).send({ message: "Unauthorized" });
        }

        const decoded = jwt.decode(token, secret); 
        const userId = decoded.id; 

        const products = await Product.find({ userId }); 
        res.json({ message: "Get all products", userId, products });
    } catch (error: any) {
        console.log(error);
        res.status(500).json({ message: `Internal server error: ${error.message}` });
    }
}


export async function getProducts(req: any, res: any) {
    try {
        const products = await Product.find();
        res.status(200).send({products});
    } catch (error: any) {
        console.log(error);
        res.status(500).json({ message: `Internal server error ${error.message} ` });
    }
}