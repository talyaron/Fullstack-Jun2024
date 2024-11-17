import crypto from 'crypto';
import { UserModel } from '../model/users/User';

export async function createUserCont(req: any, res: any) {
  try {
      const { name, email, password, phone} = req.body
      if (!name || !email || !password || !phone) {
        return res.status(400).send({ message: 'Missing some details.' });
      }
      const existingPhone = await UserModel.findOne({ phone });
      const existingEmail = await UserModel.findOne({ email });
      const existingName = await UserModel.findOne({ name })
      if (existingPhone) {
        return res.status(400).send({ message: 'This phone number is already in use.' });
      }
      if (existingEmail) {
        return res.status(400).send({ message: 'This email is already in use.' });
      }
      if (existingName) {
        return res.status(400).send({ message: 'This name is already in use.' });
      }
        
          const newUser = await UserModel.create({name, email, password, phone})
          if (newUser) {
            console.log("User successfully created.");
            return res.status(201).send({ message: 'User created successfully.' });
          } else {
            return res.status(500).send({ message: 'Error creating user.' });
          }
  } catch (error) {
    console.error(error)
  }
}