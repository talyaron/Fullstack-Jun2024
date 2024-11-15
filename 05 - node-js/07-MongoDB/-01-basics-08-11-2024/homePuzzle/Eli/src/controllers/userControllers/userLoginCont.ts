import { loggedUsers, UserModel } from "../../models/userModel";

export const accountLogin = async(req: any, res: any)=> {
  try {
    const { email, password, keepLogin } = req.body;
    const user = await UserModel.findOne({ email, password });

    if (user) {

      if (user) {
        user.key =crypto.randomUUID();
        if (keepLogin) {
          user.remember = true;
        } else {
          user.remember = false;
        }
        const loggedUser = {
          userID: user.id,
          date: new Date(),
          remember: keepLogin,
        };
        loggedUsers.push(loggedUser);
        const key = user.key;
        await user.updateOne({ email }, { key: key });
        await user.save();
        console.log(user.key);
        res.json({ message: `logging success! --${keepLogin}`, key });
        console.log(user.name, "was given this key:", key);
        return;
      } else
        res.json({
          error: "wrong password",
          email,
          message: "wrong email or password",
        });
    } else
      res.json({
        error: "no such email",
        email,
        message: "wrong email or password",
      });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred." });
    }
  }
}

