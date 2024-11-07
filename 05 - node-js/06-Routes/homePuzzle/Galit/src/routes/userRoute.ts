import express from 'express';
import { users } from '../models/userModel';

const router = express.Router();

async function getUserByUsername(username: string) {
    return users.find(user => user.username === username);
}

async function verifyPassword(inputPassword: string, storedPassword: string) {
    return inputPassword === storedPassword;
}

// Register
router.post('/register', (req: any, res: any) => {
    const { username, password } = req.body;

    if (users.some(user => user.username === username)) {
        return res.status(409).json({ message: 'Username already exists' });
    }

    users.push({ username, password });
    
    req.session.user = { username };
    res.json({ message: 'Registered successfully' });
});

// Login
router.post('/login', async (req: any, res: any) => {
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
});

// Logout
router.post('/logout', (req, res) => {
    req.session.destroy(() => res.json({ message: 'Logged out successfully' }));
});

export default router;
