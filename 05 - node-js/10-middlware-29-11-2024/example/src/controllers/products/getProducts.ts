import Product from "../../model/products/productModel";
import jwt from 'jwt-simple';
import { secret } from "../clients/setClients";
import { PurchaseModel } from "../../model/purchase/purchaseModel";


export async function getMyProducts(req: any, res: any) {
    try {
       const user = req.user;

       if(!user) throw new Error("User not found");


        const _products = await PurchaseModel.find({ clientId: decoded.id }).populate('productId');
      
        const products = _products.map((product: any) => product.productId);


        res.json({ message: "Get all products", useId: user, products });


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