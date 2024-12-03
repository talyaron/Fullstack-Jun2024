import crypto from 'crypto';
import { UserModel } from '../model/users/User';

export async function deleteUserCont(req: any, res: any) {
  try {
      console.log(req.body)
        const { _id } = req.body;
        const allUsers = await UserModel.findOne({ _id })
        if(!allUsers) throw new Error("Error not found this User.")

          await allUsers.deleteOne();
          return res.status(200).json({ message: "User deleted successfully." });

        } catch (error: any) {
          console.error("Error deleting user:", error);
          return res.status(500).json({ message: "An error occurred while deleting the user.", error: error.message });
        }
}