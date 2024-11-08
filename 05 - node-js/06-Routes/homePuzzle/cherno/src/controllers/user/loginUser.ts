import { users } from "../../models/users";

export function loginUser(req: any, res: any)
{
    try
    {   const data = req.body.data;

        res.send(checkUser(data.username, data.password));
    }
    catch(error)
    {
        console.error(error);
        res.status(500).send({message: `Error registering user: ${error}`});
    }
}

function checkUser(username: string, password: string)
{
    const user = users.find(u => u.username === username && u.password === password);

    if(user) return {isLoggedIn: true, userId: user.id};

    return {isLoggedIn: false};
}