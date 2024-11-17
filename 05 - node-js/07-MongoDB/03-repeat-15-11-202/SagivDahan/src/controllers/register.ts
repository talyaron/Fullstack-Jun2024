import { UserModel } from '../model/Users';


export const register = async (req: any, res: any) => {
    const { name, email, password,  } = req.body;
    console.log(name, email, password)

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const newUser = new UserModel({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error: any) {
        if (error.code === 11000) {
            return res.status(409).json({ message: 'Username already exists' });
        }
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error });
    }
};