import User, {users} from '../../models/users/usersModel';

export const register = async (req: any, res: any) => {
    const { name, email, password } = req.body;

    if (!name || email|| !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const existingUser = users.find((user) => user.name === name);
        if (existingUser) {
            return res.status(409).json({ message: 'Username already exists' });
        }

        
        const newUser = new User(name,email,  password );

        users.push(newUser)

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};