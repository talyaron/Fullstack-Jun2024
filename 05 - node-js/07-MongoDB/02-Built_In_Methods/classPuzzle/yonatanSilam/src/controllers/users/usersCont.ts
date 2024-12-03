import { Request, Response } from 'express';
import User, { UserModel, users } from '../../models/users/usersModel';

export const register = async (req: any, res: any) => {
    const { name, email, password } = req.body;
    console.log(name, email, password)

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        // const existingUser = users.find((user) => user.name === name);
        // if (existingUser) {
        //     return res.status(409).json({ message: 'Username already exists' });
        // }


        // const newUser = new User(name,email,  password );
        const newUser = new UserModel({ name, email, password });
        await newUser.save();

        // users.push(newUser)

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error: any) {
        if (error.code === 11000) {
            return res.status(409).json({ message: 'Username already exists' });
        }
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error });
    }
};

export const login = async (req: any, res: any) => {
    try {
        const { email, password } = req.body;

        console.log(email, password)

        if (!email || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        const user = await UserModel.findOne({ email, password });
        if(!user){
            return res.status(401).json({message: 'User or password is incorrect'})
        }

        res.status(200).json({ message: 'User logged in successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error });
    }
}
