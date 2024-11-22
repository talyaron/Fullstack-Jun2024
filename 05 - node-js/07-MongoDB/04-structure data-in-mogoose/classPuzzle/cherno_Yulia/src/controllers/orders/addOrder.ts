import Order from "../../model/order/orderModel";

export async function addOrder(req: any, res: any)
{
    try
    {
        const { clientId, productId } = req.body;

        if(!clientId || !productId) throw new Error(`Invalid clientId or productId`);
    
        const newOrder = new Order(
        { 
            client: clientId,
            product: productId 
        });

        const savedOrder = await newOrder.save();

        res.status(200).send(savedOrder);

        res.send({ message: "Order added successfully" });
    }
    catch(err: any)
    {
        res.status(400).send({ error: err.message });
        console.error(err);
    }
}