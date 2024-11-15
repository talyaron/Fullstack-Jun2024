import { model, Schema } from "mongoose";

export default class User {
  id: string;
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

export const users: User[] = [];

//data structure
export const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

// model => collection
export const UserModel = model("User", UserSchema); // collection name is 'users' by default
