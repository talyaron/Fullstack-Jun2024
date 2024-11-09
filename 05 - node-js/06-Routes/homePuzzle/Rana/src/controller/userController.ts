// userController.ts

import { Request, Response } from 'express';
import { users } from '../models/userModel';

export const registerUser = (req: Request, res: Response) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  console.log("User registered successfully");
  res.status(201).json({ message: "User registered successfully" });
};

export const loginUser = (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  console.log("User logged in successfully");
  res.status(200).json({ message: "User logged in successfully" });
};
