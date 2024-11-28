import { ClientModel } from "../../model/clients/ClientModel";


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

        //send request to DB
        await ClientModel.create({
            firstName,
            lastName,
            email,
            password,
            phone
        })

        console.log("Register successful")
        console.log("the user registration is : " + firstName, lastName, email, password, phone)
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
        const user = await ClientModel.findOne({ email, password });
        if (!user) {
            return res.status(400).send({ error: "Invalid email or password" });
        }

        //send cookie to client
        res.cookie('user', user._id, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 });

        return res.status(200).send({ message: "Login successful" });

    } catch (error: any) {
        if (error.code = "11000") {
            res.status(400).send({ error: "user already exists" })
        }
        console.error(error);
        return res.status(500).send({ error: error.message });
    }
}