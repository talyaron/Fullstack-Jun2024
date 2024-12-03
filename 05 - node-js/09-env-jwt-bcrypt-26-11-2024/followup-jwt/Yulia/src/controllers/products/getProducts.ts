import Product from "../../model/products/productModel";
import jwt from 'jwt-simple';
import { secret } from '../clients/setClients';


export async function getMyProducts(req: any, res: any) {
    try {
        const { user } = req.cookies;
        console.log(user);

        const decoded = jwt.decode(user, secret);
        console.log(decoded);

        const { id } = decoded;

        const myProducts = await Product.find({ userId: id});
        console.log(myProducts);


        res.json({ message: "Get all my products", useId: user, myProducts });


    } catch (error: any) {
        console.log(error);
        res.status(500).json({ message: `Internal server error ${error.message} ` });
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