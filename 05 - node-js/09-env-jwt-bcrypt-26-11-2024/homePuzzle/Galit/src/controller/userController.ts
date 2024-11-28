import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jwt-simple';
import { UserModel } from '../models/userModel';

const secret = process.env.JWT_SECRET || 'default_secret_key';
const saltRounds = Number(process.env.SALT_ROUNDS) || 10;


export const register = async (req: Request, res: Response): Promise<void> => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400).json({ message: 'All fields are required' });
        return;
    }

    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            res.status(409).json({ message: 'Email already registered' });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new UserModel({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error during registration'});
    }
};


export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ message: 'Email and password are required' });
        return;
    }

    try {
        const user = await UserModel.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        const token = jwt.encode({ id: user._id, email: user.email }, secret);

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Error during login', error });
    }
};


export const logout = (req: Request, res: Response): void => {
    res.clearCookie('user');
    res.status(200).json({ message: 'Logged out successfully' });
};
