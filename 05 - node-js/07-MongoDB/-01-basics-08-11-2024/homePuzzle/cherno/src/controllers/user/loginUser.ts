import { UserModel } from "../../models/users";

export const loginUser = async (req: any, res: any) =>
{
    try
    {   
        const data = req.body.data;

        const user = await UserModel.findOne({ username: data.username, password: data.password });

        if(!user)
        {
            return res.status(401).json({message: 'User or password is incorrect'})
        }

        res.status(200).json({ message: 'User logged in successfully', userId: user.id });
    }
    catch(error)
    {
        console.error(error);
        res.status(500).send({message: `Error registering user: ${error}`});
    }
}