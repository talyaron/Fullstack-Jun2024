import { User, users } from "../../models/users/usersModel";
import crypto from "crypto";

export function createUser(req: any, res: any) {
  const { username, email, password } = req.body;
  console.log(username, email, password);
  if (!username || !password || !email) {
    return res
      .status(400)
      .json({ message: "Username, password and email are required" });
  }

  const newUser: User = {
    id: `Id-${crypto.randomUUID()}`,
    username,
    password,
    email,
  };

  users.push(newUser);

  console.log("New user:", newUser);

  res
    .status(201)
    .json({ message: "User registered successfully", user: newUser });
};
