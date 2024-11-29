import Product from "../../model/products/productModel";
import { PurchaseModel } from "../../model/purchase/purchaseModel";
import mongoose from 'mongoose';
import { jwt_secret } from "../clients/setClients";
import jwt from 'jwt-simple';
import 'dotenv/config';

export async function getMyProducts(req: any, res: any) {
    try {
        const { user } = req.cookies;

        console.log(`before decode` , user);

        if (!jwt_secret)
            throw new Error("Missing JWT secret");
        const decoded = jwt.decode(user, jwt_secret);
        console.log(`decoded user: ` , decoded);
        const { id } = decoded;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("Invalid user ID");
        }

        console.log("the user from get my product: " + id);
        if (!user)
            throw new Error("Missing required information");

        const product = await PurchaseModel.find({clientId: id}).populate('productId').populate('clientId').exec();

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