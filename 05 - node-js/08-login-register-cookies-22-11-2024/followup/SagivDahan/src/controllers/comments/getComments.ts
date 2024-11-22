import Comment from "../../model/comments/commentModel";

export async function getCommentByProductId(req: any, res: any) {

    try {
        const { productId } = req.query;
        if (!productId) {
            return res.status(400).json({ message: 'productId is required' });
        }
        const comments = await Comment.find({ product: productId }).populate('client').populate('product').exec();
        res.status(200).json({comments});
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
}