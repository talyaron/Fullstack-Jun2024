import { users } from '../../models/userModel';
import { Post } from '../../models/postModel';
import { randomBytes } from 'crypto'; 

export function signupUser(req:any, res: any) {
    try {
                const {  userName, email, password, phoneNumber } = req.body;
        
                if ( !userName || !email || !password || !phoneNumber) {
                    return res.status(400).json({ error: "All fields are required" });
                }
        
                const id = randomBytes(16).toString("hex"); 
                const posts: Post[] = [];
                users.push({userName, id, email, password, phoneNumber, posts});
                console.log(users);
                res.status(201).json({ message: "User added successfully" });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while adding the user" });
            }
}