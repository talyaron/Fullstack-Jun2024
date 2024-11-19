import { OrderModel } from "../../model/orders/orderModel";

export async function addOrder(req:any,res:any)
{
    try {
        const { productID, clientID }=req.query;

        if(!productID||!clientID) throw new Error("no client or product ID")

            const date = new Date().getFullYear();
        
        
          const newOrder=  await OrderModel.create({status:"running",clientID:clientID,productID:productID,date:date})
          const  orderID=newOrder._id;
        res.json({message:"order created",orderID})

    } catch (error:any) {
        res.status(501).json({ error:error.message });
    }
}
