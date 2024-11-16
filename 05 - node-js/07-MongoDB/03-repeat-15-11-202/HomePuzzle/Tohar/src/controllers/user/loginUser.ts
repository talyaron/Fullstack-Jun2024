import { userModel } from '../../models/userModel';

export async function loginUser(req:any, res:any) {
    try {
            const {email, password } = req.body;
        
            const user = await userModel.findOne({ email: email});
            if (user) {
                if(user.password !== password) {
                    return res.status(400).json({ message: 'Invalid password' });
                } else {
                res.json(user);
                }
            } else {
                return res.status(400).json({ message: 'You are not registered, please sign up.' });
            }
        
        } catch (error) {
            console.error("Error in /api/login:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
}