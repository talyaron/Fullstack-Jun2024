import { PurchaseModel } from "../../model/purchase/purchaseModel";
import { jwt_secret } from "../clients/setClients";
import jwt from 'jwt-simple';
import 'dotenv/config';

export async function addToCart(req:any, res:any) {
    try {
        const {user} = req.cookies;
        if (!jwt_secret)
            throw new Error("Missing JWT secret");
        const decoded = jwt.decode(user, jwt_secret);

        const { id } = decoded;

        const {productId} = req.body;

        if(!productId || !user) throw new Error("Missing required information");

        await PurchaseModel.create({productId, clientId: id})
        res.status(200).json({message: "Product added to cart"});

    } catch (error:any) {
        console.error(error);
        res.status(500).json({ message: `Internal server error ${error.message} ` });
        
    }
}