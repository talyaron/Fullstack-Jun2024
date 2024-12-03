import { Schema, model } from 'mongoose';

export const ClientSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
    unique: true,
  },
  dateOfBirth: Date,
  yearOfBirth: Number,
  password: String
});

export const ClientModel = model('Client', ClientSchema);