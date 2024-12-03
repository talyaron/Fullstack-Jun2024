import { UserModel } from "../../models/userModel";
import bcrypt from 'bcrypt';
import jwt from 'jwt-simple';
import { secret } from "./addUserCont";


export async function login(req: any, res: any) {
    try {
        const { email, password } = req.body;

        if (!email || !password) throw new Error("Please fill all fields");

        // Find user by email
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).send({ error: "Invalid email or password1" });
        }

        if (!user.password) throw new Error("Invalid email or password2");

        //compare password
       
        const match = await bcrypt.compare(password, user.password);
        if(!match) throw new Error("Invalid email or password3");

        //encode user id and role in token
        const token = jwt.encode({ id: user._id, role: "user" }, secret);

        //send cookie to client
        res.cookie('user', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 });

        return res.status(200).send({ message: "Login successful" ,ok:true});

    } catch (error: any) {

        console.error(error);
        return res.status(500).send({ error: error.message });
    }
}