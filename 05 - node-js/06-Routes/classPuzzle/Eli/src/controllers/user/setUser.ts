import { users } from "../../models/users/userModel";
import { User } from "../../models/users/userModel";


export function setUser (req: any, res: any) {
    const {id, name, email, password } = req.body;
    
    console.log('Received POST request:', req.body);  

    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields (name, email, password) are required" });
    }
 const newUSer = new User(id, name, email, password );
    users.push(newUSer);

    console.log('Current posts:', users); 

    res.status(201).json({ message: "Post added successfully" });
}