import { infoValidation } from "../../models/formValidatorModel";
import {  UserModel } from "../../models/userModel";

export const registerUser=async(req: any, res: any) =>{
  try {
    const { name, email, password, rePassword } = req.body;

    const isNameInValid = infoValidation.isNameValid(name);
    const isEmailInValid = infoValidation.isEmailValid(email);
    const isPasswordInValid = infoValidation.isPasswordValid(password);
    const isRepassWordInValid = infoValidation.isRePasswordValid(
      rePassword,
      password
    );
    if (
      !isNameInValid &&
      !isEmailInValid &&
      !isPasswordInValid &&
      !isRepassWordInValid
    ) {
      const newUser = new UserModel({email, name, password});
   //   users.push(newUser);
    //  newUser.remember = false;
     await newUser.save();
      res.json({ message: "user info valid on server creating user!", newUser });
    } else {
      if (isEmailInValid) {
        res.json({
          error: `${isEmailInValid}`,
        });
      } else
        res.json({
          error: "Some discrepancies occurred",
          isNameInValid,
          isPasswordInValid,
          isRepassWordInValid,
        });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred." });
    }
  }
}
