import { model, Schema } from "mongoose";
const mongoose = require('mongoose');
export interface loggedUser {
  userID: string;
  date: Date;
  remember: string;
}

//export const users: User[] = [];
export const loggedUsers: loggedUser[] = [];

//users.push(admin, admin2);
export const UserSchema=new Schema(
  {
      name: {
          type: String,
          required: true
      }, 
      email: {
          type: String,
          required: true,
          unique: true
      },
      password: {
          type: String,
          required: true
      },
      key: {
        type: String,
        required: false,
      },remember:{
        type: Boolean,
        required: false,
    },
      
  });

  
  export const UserModel = model('User', UserSchema); // collection name is 'users' by default

//   const admin = new UserModel({name:"admin", email:"admin", password:"admin"});
// const admin2 = new UserModel({name:"admin2", email:"admin2",password: "admin2"});
//  admin2.save();
//  admin.save();