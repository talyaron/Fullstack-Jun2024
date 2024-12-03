import crypto from 'crypto';
import { UserModel } from '../model/users/User';

export async function updateUserCont(req: any, res: any) {
  try {
    const { id, name, email, password, phone } = req.body;

    const updateUser = await UserModel.updateOne( { _id: id }, { $set: { name, email, password, phone } } );

    if (updateUser.modifiedCount > 0) {
      res.status(200).send({ message: "User updated successfully" });
    } else {
      res.status(500).send({ message: "User not found or no changes were made" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error updating user" });
  }
}
