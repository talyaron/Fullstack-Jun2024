import { UserModel } from '../models/userModel';

export const register = async (req: any, res: any) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Username, email, and password are required' });
    }

    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'Email already registered' });
        }

        const newUser = new UserModel({ username, email, password });
        const userDB = await newUser.save();

        res.status(201).json({ message: 'User registered successfully', user: userDB });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};

export const login = async (req: any, res: any) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const user = await UserModel.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        req.session.user = { email };
        res.status(200).json({ message: 'Login successful', user: { name: user.username, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};

export const logout = (req: any, res: any) => {
    req.session.destroy((err: Error | null) => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed' });
        }
        res.status(200).json({ message: 'Logged out successfully' });
    });
};
