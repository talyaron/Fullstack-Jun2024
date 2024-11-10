import { users } from '../../models/userModel';

export function loginUser(req:any, res:any) {
    try {
                const {email, password } = req.body;
        
                const user = users.find(user => user.email === email);
        
                if (!user) {
                    return res.status(400).json({ error: "User not found" });
                }
        
                if(user.password !== password) {
                    return res.status(400).json({ error: "Incorrect password" });
                }
        
            } catch (error) {
                console.error("Error in /api/login:", error);
                res.status(500).json({ error: "Internal Server Error" });
            }
}