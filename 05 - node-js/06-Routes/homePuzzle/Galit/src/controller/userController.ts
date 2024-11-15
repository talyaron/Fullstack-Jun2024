import { users, User } from '../models/userModel';

export const register = async (req: any, res: any) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Username, email, and password are required' });
    }

    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
        return res.status(409).json({ message: 'Email already registered' });
    }

    const newUser = new User(name, email, password);
    users.push(newUser);

    res.status(201).json({ message: 'User registered successfully' });
};

export const login = async (req: any, res: any) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = users.find((user) => user.email === email && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    req.session.user = { email };
    res.status(200).json({ message: 'Login successful', user: { name: user.username, email: user.email } });
};


export const logout = (req: any, res: any) => {
    req.session.destroy((err: Error | null) => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed' });
        }
        res.status(200).json({ message: 'Logged out successfully' });
    });
};
