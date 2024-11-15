import { users } from '../../models/userModel';

export function userExists(req:any, res:any) {
    const { email } = req.query;

        if (!email) {
            return res.status(400).json({ error: "Email is required" });
        }
        const userExists = users.some(user => user.email === email);
        console.log('userExists', userExists);
        res.json({ exists: userExists });
}