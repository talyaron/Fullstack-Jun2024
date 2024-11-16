import { Request, Response } from 'express';
import { UserModel } from '../../model/users/usersModel';   

export const loginUser = async (req: any, res: any) => {           /* הפונקציה נגשת למסד נתונים שלי ובודקת האם המשתמש רשום כבר במערכת */
    try{
        const { email, password } = req.body;
        if (!email || !password){
            throw new Error(`Request failed with status ${res.status}`);
            console.log("email or password is required");
        }

        const email_user = await UserModel.findOne({ email });
        if (!email_user)
            return res.status(400).json({ error: 'User not found' });

        const password_user = await UserModel.findOne({ password });
        if (!password_user)
            return res.status(400).json({ error: 'Password is incorrect' });

        
/* אם הגענו לפה עם - סימן שהמייל שלו והסיסמה קיימים ונכונים */
        
        res.status(200).json({ message: 'Login successful' });
}catch
        {
            console.error('Error in loginController: ');
            res.status(500).json({ error: 'Internal server error' });
        }
}