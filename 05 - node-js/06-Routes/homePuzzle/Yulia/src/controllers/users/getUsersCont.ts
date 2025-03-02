import { users } from "../../models/users/usersModel";

export const getUser = (req: any, res: any) => {
  const { username, password } = req.body;
  const trimmedUsername = username.trim();
  const trimmedPassword = password.trim();

  console.log("Received username:", trimmedUsername);
  console.log("Received password:", trimmedPassword);
  console.log("Current users:", users);

  const user = users.find(
    (u) => u.username === username.trim() && u.password === password.trim()
  );

  if (user) {
    res.status(200).json({ message: "Login successful", user, success: true });
  } else {
    res.status(401).json({ message: "Invalid details", success: false });
  }
};

