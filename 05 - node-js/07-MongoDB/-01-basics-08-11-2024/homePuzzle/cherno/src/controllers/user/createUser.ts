import { UserModel } from "../../models/users";

export const registerUser = async (req: any, res: any) =>
{
    try
    {   
        const data = req.body.data;

        const user = new UserModel({username: data.username, password: data.password});
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    }
    catch(error: any)
    {
        if (error.code === 11000) 
        {
            return res.status(409).json({ message: 'Username already exists' });
        }
        console.error(error);
        res.status(500).send({message: `Error registering user: ${error}`});
    }
}