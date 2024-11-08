import {model, Schema } from "mongoose";

export default class User {
    id: string;
    name: string;
    email: string;
    password: string;

    constructor( name: string, email: string, password: string) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

export const users: User[] = [];

export const UerSchema=new Schema(
{
    name:String,
    email:String,
    password:String,
});