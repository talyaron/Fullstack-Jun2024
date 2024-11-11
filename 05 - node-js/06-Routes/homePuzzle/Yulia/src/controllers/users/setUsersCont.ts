import { User, users } from "../../models/users/usersModel";
import crypto from "crypto";

export function createUser(req: any, res: any) {
  console.log("Incoming request body:", req.body); 

  const { username, email, password } = req.body;

  if (!username || !password || !email) {
    console.log("Missing required fields"); 
    return res
      .status(400)
      .json({ message: "Username, password and email are required" });
  }

  const newUser: User = {
    id: `id-${crypto.randomUUID()}`,
    username,
    password,
    email,
  };

  users.push(newUser);

  console.log("New user created:", newUser);

  res
    .status(201)
    .json({ message: "User registered successfully", user: newUser });
}
