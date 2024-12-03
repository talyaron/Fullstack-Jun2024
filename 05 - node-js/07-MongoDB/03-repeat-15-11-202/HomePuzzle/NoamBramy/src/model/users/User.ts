
import crypto from 'crypto';
import { model, Schema } from 'mongoose';

export const UserSchema = new Schema({

  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  }
})

export const UserModel = model("User", UserSchema)