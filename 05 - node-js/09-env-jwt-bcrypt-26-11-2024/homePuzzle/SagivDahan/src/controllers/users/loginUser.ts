import { userModel } from '../../models/userModel';
import jwt from "jwt-simple";
import 'dotenv/config';
import bcrypt from "bcrypt"

const secret = "process.env.JWT_SECRET";
if (!secret) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
}
console.log(secret);

export async function loginUser(req:any, res:any) {
    try {
            const {email, password } = req.body;
            const user = await userModel.findOne({ email: email});
            if (user) {
                const match = await bcrypt.compare(password, user.password);
                console.log("is match", match);

                if (!match) {
                    return res.status(400).json({ message: 'Invalid password' });
                }
    
            const token = jwt.encode(user, secret);
            console.log("encode token:", token);
            
            //send user cookie to client
            res.cookie('user', user, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 });
            res.json(user);
            } else {
                return res.status(400).json({ message: 'You are not registered, please sign up.' });
            }
        
        } catch (error) {
            console.error("Error in /api/login:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
}