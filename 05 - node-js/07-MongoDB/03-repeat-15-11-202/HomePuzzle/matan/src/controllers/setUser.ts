import { Request, Response } from "express";
import { UserModel } from "../models/userModel";

export async function addUser(req: Request, res: Response): Promise<void> {
    try {
        const { firstName, lastName, email, phone, yearOfBirth, password } = req.body;

        if (!firstName || !lastName || !email || !phone || !yearOfBirth || !password) {
            res.status(400).json({ error: "Missing required fields" });
            return;
        }

        const newUser = await UserModel.create({ firstName, lastName, email, phone, yearOfBirth, password });
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (err) {
        console.error("Error creating user:", err);
        res.status(500).json({ error: "Internal server error" });
    }
}
