import { ClientModel } from "../../model/clients/ClientModel";
import jwt from 'jwt-simple';
import bcrypt from 'bcrypt';

export const secret = process.env.SECRET_JWT || "secret"


export async function addClient(req: any, res: any) {
    try {
        const {
            firstName,
            password,
            lastName,
            email,
            phone,
        } = req.body;



        //send request to DB
        const result = await ClientModel.create({
            firstName,
            password,
            lastName,
            email,
            phone,
        })
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

        if (!firstName || !lastName || !email || !password || !phone) {
            throw new Error('Please fill all fields');
        }
        if (!process.env.SALT_ROUNDS) throw new Error("SALT_ROUNDS is not defined in the environment variables.");
        const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);
        const hashpass = await bcrypt.hash(password, saltRounds);
        await ClientModel.create({
            firstName,
            lastName,
            email,
            password: hashpass,
            phone
        })

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

        const user = await ClientModel.findOne({ email });
        if (!user) {
            return res.status(400).send({ error: "Invalid email or password" });
        }

        if (!user.password) throw new Error("Invalid email or password");

        const credentials = await bcrypt.compare(password, user.password);
        if (!credentials) {
        return res.status(400).send({ error: "Invalid password" });
        }

        const token = jwt.encode({ id: user._id, role: "user" }, secret);

        res.cookie('user', token, { httpOnly: true, maxAge: 1000 * 60 * 15 });

        return res.status(200).send({ message: "Login successful" });

    } catch (error: any) {
        if (error.code = "11000") {
            res.status(400).send({ error: "user already exists" })
        }
        console.error(error);
        return res.status(500).send({ error: error.message });
    }
}