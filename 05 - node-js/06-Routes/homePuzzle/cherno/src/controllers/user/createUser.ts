import { users } from "../../models/users";

export function registerUser(req: any, res: any)
{
    try
    {   const data = req.body.data;
        if(!createUser(data.username, data.password)) res.send({ifCreated: false});

        else res.send({ifCreated: true});
    }
    catch(error)
    {
        console.error(error);
        res.status(500).send({message: `Error registering user: ${error}`});
    }
}

function createUser(username: string, password: string): boolean
{
    if (users.find(u => u.username === username)) return false;

    const newUser = {id: crypto.randomUUID(), username: username, password: password}
    users.push(newUser);

    return true;
}
