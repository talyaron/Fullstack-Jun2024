// controllers/userController.ts
import { users } from '../models/userModel';

async function getUserByUsername(username: string) {
    return users.find(user => user.username === username);
}

async function verifyPassword(inputPassword: string, storedPassword: string) {
    return inputPassword === storedPassword;
}

export const registerUser = async (req: any, res: any) => {
    const { username, password } = req.body;

    if (users.some(user => user.username === username)) {
        return res.status(409).json({ message: 'Username already exists' });
    }

    users.push({ username, password });
    req.session.user = { username };
    res.json({ message: 'Registered successfully' });
};

export const loginUser = async (req: any, res: any) => {
    const { username, password } = req.body;
    const user = await getUserByUsername(username);

    if (!user) {
        return res.status(401).json({ message: 'User not registered' });
    }

    const passwordIsCorrect = await verifyPassword(password, user.password);
    if (!passwordIsCorrect) {
        return res.status(401).json({ message: 'Incorrect password' });
    }

    req.session.user = { username };
    res.status(200).json({ message: 'Login successful' });
};

export const logoutUser = (req: any, res: any) => {
    req.session.destroy(() => res.json({ message: 'Logged out successfully' }));
};
