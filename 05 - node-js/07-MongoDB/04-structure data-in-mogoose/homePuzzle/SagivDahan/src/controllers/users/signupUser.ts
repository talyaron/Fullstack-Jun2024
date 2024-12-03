import { users, userModel } from '../../models/userModel';
import { randomBytes } from 'crypto';

export async function signupUser(req: any, res: any) {
    try {
        const { userName, email, password, phoneNumber } = req.body;

        if (!userName || !email || !password || !phoneNumber) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'Email already registered!' });
        } else {
            const id = randomBytes(16).toString("hex");
            users.push({ userName, email, password, phoneNumber, id });

            const newUser = new userModel({ userName, email, password, phoneNumber, id });
            await newUser.save();

            res.status(201).json({ message: "User added successfully", newUser });
        }
    } catch (error) {
        res.status(500).json({ error: "An error occurred while adding the user" });
    }
}