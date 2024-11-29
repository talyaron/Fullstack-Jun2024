import { serviceProviderModel } from "../../models/serviceProviderModel";
// import { UserModel } from "../../models/userModel";


// export async function getUserById(req: any, res: any) {

//     try {
//         const { userId } = req.query;
//         if (!userId) {
//             return res.status(400).json({ message: 'userID is required' });
//         }

//         const user = await UserModel.findOne({ _id: userId });
//         res.status(200).json({user});
//     } catch (error:any) {
//         res.status(500).json({ message: error.message });
//     }
// }

export async function getSPByEmail(req: any, res: any) {

    try {
        const { email } = req.query;
        if (!email) {
            return res.status(400).json({ message: 'email is required' });
        }

        const sP = await serviceProviderModel.findOne({ email: email });
        if (!sP) {
            console.log('sP is not exist'); // Log the message
            return res.status(400).json({ message: 'sP is not exist' });
        }
        res.status(200).json({ sP });
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
}