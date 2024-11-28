import Product from "../../model/products/productModel";
import { PurchaseModel } from "../../model/purchase/purchaseModel";

export async function getMyProducts(req: any, res: any) {
    try {
        const { user } = req.cookies;

        const products = await PurchaseModel.find({clientId:user}).populate('productId');
        console.log(products)

        const pros=products.map((pro)=> pro.productId);
        console.log(pros)
        res.status(200).send({pros});
       
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