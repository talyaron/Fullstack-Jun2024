import { UserModel } from "../model/Users";

export const login = async (req: any, res: any) => {
    try {
        const { email, password } = req.body;

        console.log(email, password)

        if (!email || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        const user = await UserModel.findOne({ email, password });
        if(!user){
            return res.status(401).json({message: 'User or password is incorrect'})
        }

        res.status(200).json({ message: 'User logged in successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error });
    }
}
