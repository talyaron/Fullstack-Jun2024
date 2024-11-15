import crypto from 'crypto';
import { UserModel } from '../model/users/User';


export async function getUserCont(req: any, res: any) {
  try {
    const users = await UserModel.find({});
    if (!users || users.length === 0) {
      return res.status(500).json({ message: "No users found." });
    }

    const allUsers = users.map(user => ({
      id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone,
    }));
    res.json(allUsers);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching users.", error: error.message });
  }
}
