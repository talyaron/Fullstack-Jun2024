import 'dotenv/config';
import { ClientModel } from "../../model/clients/ClientModel";
import jwt from 'jwt-simple';
export const jwt_secret = process.env.JWT_CODE || "secret";
import bcrypt from 'bcrypt';
const saltRounds = process.env.SALT_ROUND || 10;

export async function addClient(req: any, res: any) {
    try {
        const {
            firstName,
            password,
            lastName,
            email,
            phone,
        } = req.body;
        console.log(phone)

        //send request to DB
        const result = await ClientModel.create({
            firstName,
            password,
            lastName,
            email,
            phone,
        })
        console.log(result)
        if (!result) {
            return res.status(400).send({ error: "Couldn't create new user" })
        }

        return res.status(201).send({ message: "Client created successfully" })


    } catch (error: any) {
        console.error(error)
        return res.status(500).send({ error: error.message })
    }
}

export async function register(req: any, res: any) {
    try {
        const { firstName, lastName, email, password, phone } = req.body;

        if(!firstName || !lastName || !email || !password || !phone) {
            throw new Error('Please fill all fields');
        }
        if (!saltRounds)
            throw new Error('Please set SALT_ROUNDS environment variable');

const hashPassword = await bcrypt.hash(password,saltRounds);
console.log(`the hashed password: ${hashPassword}`);

        //send request to DB
        await ClientModel.create({
            firstName,
            lastName,
            email,
            password:hashPassword,
            phone
        })

        console.log("Register successful")
        console.log("the user registration is : " + firstName, lastName, email, hashPassword, phone)
        return res.status(201).send({ message: "User registered successfully" });

    } catch (error: any) {
        console.error(error);
        return res.status(500).send({ error: error.message });
    }
}

export async function login(req: any, res: any) {
    try {
        const { email, password } = req.body;

        if (!email || !password) throw new Error("Please fill all fields");

                // Find user by email
                const user = await ClientModel.findOne({ email});
                if (!user) {
                     return res.status(400).send({ error: "from clientModel Invalid email or password" });
                         }

        if (!user.password) throw new Error("Please fill all fields");


         const isMatch = await bcrypt.compare(password, user.password);
         if (!isMatch) return res.status(400).send({ error: "bcrypt: Invalid email or password" });

         if (!jwt_secret) throw new Error("Please fill all fields");
        const token = jwt.encode({ id: user.id, role: "user"}, jwt_secret);

        console.log('before coding', {id: user.id, role:"user"});
        console.log(token);
        //send cookie to client
        res.cookie('user', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 });

        //send cookie to client

        return res.status(200).send({ message: "Login successful" });

    } catch (error: any) {
        if (error.code = "11000") {
            res.status(400).send({ error: "user already exists" })
        }
        console.error(error);
        return res.status(500).send({ error: error.message });
    }
}