import Order from "../../model/orders/orderModel";


export const getAllOrders = async(req:any, res:any): Promise<undefined> =>{
    try {
        const {clientId} = req.query;
        if(!clientId)
            return;
        const ClientOrder = await Order.find({clientId:clientId})
        res.status(201).json(ClientOrder);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get all orders', error });
        return;
    }
}