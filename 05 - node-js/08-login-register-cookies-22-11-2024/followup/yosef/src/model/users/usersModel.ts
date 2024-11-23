import { model, Schema } from "mongoose";

export default class usersServer {
   id: string;
   name: string;
   phone: string;
   email: string;
   password: string;
    constructor(name: string, phone: string, email: string, password: string) {
       this.id = crypto.randomUUID();
       this.name = name;
       this.phone = phone;
       this.email = email;
       this.password = password;
}
}


export const UserSchema = new Schema({ /*   to users register */  
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        },
    })

export const UserModel = model('Users', UserSchema);


