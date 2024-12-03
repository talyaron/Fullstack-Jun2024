// import { usersServer } from "../../model/users/usersModel";   /*  לא השתמשתי בו בינתיים */
import { Request, Response } from 'express';
import { UserModel } from "../../model/users/usersModel";
import mongoose from 'mongoose';


export const registerUser = async (req: any, res:any) =>{
    try
    {
        const { name, password, email, phone } = req.body;
        
        if (!name ||!phone ||!email ||!password) {
            return res.status(400).json({ error: "All fields (name, phone, email, password) are required" });
        }

        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(400).json({ error: "User with this email already exists" });
        }
        
        const newUser = new UserModel({name, password, email, phone });
        console.log("New user:", newUser)
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
        console.log("User registered successfully to the database");

    }
    catch(err){
        console.error("Error in registerUser: ", err);
        res.status(500).json({ error: "Internal server error" });
        console.log("Error in registerUser")
        // usersServer.addUser(req.body);  /* לא השתמשתי בו בי��תיים */
 
    }
}

