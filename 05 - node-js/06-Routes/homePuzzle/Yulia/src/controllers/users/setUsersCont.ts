import { User, users } from "../../models/users/usersModel";
import crypto from "crypto";

export function createUser(req: any, res: any) {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  if (!name || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  const newUser: User = {
    id: `Id-${crypto.randomUUID()}`,
    name,
    password,
    email,
  };

  users.push(newUser);

  res
    .status(201)
    .json({ message: "User registered successfully", user: newUser });
};
