import { loggedUsers, users } from "../../models/userModel";

export function accountLogin(req: any, res: any) {
  try {
    const { email, password, keepLogin } = req.body;
    const foundEmail = users.find((user) => email === user.email);

    if (foundEmail) {
      const foundPassword: boolean = foundEmail.password === password;

      if (foundPassword) {
        foundEmail.assignKey();
        if (keepLogin) {
          foundEmail.remember = true;
        } else {
          foundEmail.remember = false;
        }
        const loggedUser = {
          userID: foundEmail.id,
          date: new Date(),
          remember: keepLogin,
        };
        loggedUsers.push(loggedUser);
        const key = foundEmail.key;
        res.json({ message: `logging success! --${keepLogin}`, key });
        console.log(foundEmail.name, "was given this key:", key);
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

