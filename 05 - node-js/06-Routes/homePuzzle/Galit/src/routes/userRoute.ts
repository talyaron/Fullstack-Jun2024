import express from 'express';
import { users } from '../models/userModel';

const router = express.Router();

router.post('/register', (req: any, res: any) => {
    const { username, password } = req.body;
    if (users.some(user => user.username === username)) {
        return res.status(409).json({ message: 'Username already exists' });
    }
    users.push({ username, password });
    res.json({ message: 'Registered successfully' });
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {

        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

router.post('/logout', (req, res) => {
    req.session.destroy(() => res.json({ message: 'Logged out successfully' }));
});

export default router;
