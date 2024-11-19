import Order from "../../model/orders/orderModel";

export const createOrder = async(req:any, res:any): Promise<undefined> =>{
    try {
        const {productId, clientId} = req.body;
        if (!productId || !clientId) {
            res.status(400).json({ message: 'Please provide all the required fields' });
            return;
        }
        const newOrder = new Order({
            productId, 
            clientId
        });

        const saveOrder = await newOrder.save();
        res.status(201).json(saveOrder);
        return;
    } catch (error) {
        res.status(500).json({ message: 'Failed to Order', error });
        return;
    }
}