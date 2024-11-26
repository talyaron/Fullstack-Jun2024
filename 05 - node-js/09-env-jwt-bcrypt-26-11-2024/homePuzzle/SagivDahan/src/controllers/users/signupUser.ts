import { users, userModel } from '../../models/userModel';
import { randomBytes } from 'crypto';
import jwt from "jwt-simple";
import 'dotenv/config';
import bcrypt from "bcrypt";

const saltRounds = 10;


export async function signupUser(req: any, res: any) {
    try {
        const { userName, email, password, phoneNumber } = req.body;
        console.log("Request Body:", req.body);

        if (!userName || !email || !password || !phoneNumber) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "Email already registered!" });
        }

        const id = randomBytes(16).toString("hex");
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log("Hashed Password:", hashedPassword);

        const newUser = new userModel({
            userName,
            email,
            password: hashedPassword, // שדה זה חייב להיות מוגדר במודל כ-String
            phoneNumber,
            id
        });

        await newUser.save();
        console.log("User saved successfully:", newUser);

        res.cookie('user', newUser, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 });
        res.status(201).json({ message: "User added successfully", newUser });
    } catch (error: any) {
        console.error("Error occurred:", error.message || error);
        res.status(500).json({ error: error.message || "An error occurred while adding the user" });
    }
}