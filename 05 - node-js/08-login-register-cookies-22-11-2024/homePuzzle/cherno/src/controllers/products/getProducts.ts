import Product from "../../model/products/productModel";
import { PurchaseModel } from "../../model/purchase/purchaseModel";

export async function getMyProducts(req: any, res: any) {
    try {
        const { user } = req.cookies;
        const clientPurchases = await PurchaseModel.find({ clientId: user });

        if(!clientPurchases.length) return res.status(200).send({products: []});

        const products = await Promise.all(clientPurchases.map(async purchase => await Product.findById(purchase.productId)));
        
        res.status(200).send({products});
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