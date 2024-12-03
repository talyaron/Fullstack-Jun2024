import { PurchaseModel } from "../../model/purchase/purchaseModel";
import { secret } from "../clients/setClients";
import jwt from 'jwt-simple';

export async function addToCart(req:any, res:any) {
    try {
        const {user} = req.cookies;
        const {productId} = req.body;

        if(!productId || !user) throw new Error("Missing required information");
        const token = jwt.decode(user,secret);
        console.log(token);
           const { _id } = token;
        await PurchaseModel.create({productId, clientId: _id})
        res.status(200).json({message: "Product added to cart"});

    } catch (error:any) {
        console.error(error);
        res.status(500).json({ message: `Internal server error ${error.message} ` });
        
    }
}