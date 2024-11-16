import { userModel } from '../../models/userModel';

export async function userExists(req:any, res:any) {
    const { email } = req.query;

        if (!email) {
            return res.status(400).json({ error: "Email is required" });
        }
        const user = await userModel.findOne({ email: email});
        if (user) {
            res.json({ exists: user });
        } else {
        console.log('User does not exist');
        }
        // const userExists = users.some(user => user.email === email);
        // console.log('userExists', userExists);
        // res.json({ exists: userExists });
};