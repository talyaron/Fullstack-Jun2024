import Product from "../../model/products/productModel";
import { PurchaseModel } from "../../model/purchase/purchaseModel";
import mongoose from 'mongoose';

export async function getMyProducts(req: any, res: any) {
    try {
        const { user } = req.cookies;

        if (!mongoose.Types.ObjectId.isValid(user)) {
            throw new Error("Invalid user ID");
        }

        console.log("the user from get my product: " + user);
        if (!user)
            throw new Error("Missing required information");

        const product = await PurchaseModel.find({clientId: user}).populate('productId').populate('clientId').exec();

        if (!product)
            throw new Error("Product not found");
        res.status(200).json({ message: "Get all products",  product });
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

// export async function getProductsByUserId(req: any, res: any) {
//     try {
//         const { userId } = req.params;
//         const products = await Product.find({ userId });
//         res.status(200).send({ products });
//     } catch (error: any) {
//         console.log(error);
//         res.status(500).json({ message: `Internal server error ${error.message} ` });
//     }
// }