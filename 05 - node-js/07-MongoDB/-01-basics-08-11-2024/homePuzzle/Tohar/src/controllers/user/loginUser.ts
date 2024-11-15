import { users } from '../../models/userModel';

export function loginUser(req:any, res:any) {
    try {
            const {email, password } = req.body;
        
            const user = users.find(user => user.email === email);
            console.log(user);
            if (!user) {   
                return res.status(400).json({ message: 'You are not registered, please sign up.' });
            }
        
            if(user.password !== password) {
                return res.status(400).json({ message: 'Invalid password' });
            };

        
        } catch (error) {
            console.error("Error in /api/login:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
}