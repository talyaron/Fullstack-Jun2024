import { users } from "../../models/userModel";

export function updateUser(req:any, res:any) {
    try {
        const { email, info, editedInfo } = req.body;
        const userEmail = email;
        
        const user = users.find(email => email === userEmail);
        console.log(user);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        if(info === 'name') {
            user.userName = editedInfo;
        } else if (info === 'email') {
            user.email = editedInfo;
        } else {
            user.phoneNumber = editedInfo;
        }
        return res.json({ message: 'Info updated successfully', user });
            
    } catch(error) {
        console.error("Error in /api/edit-user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    };
};