import jwt from 'jwt-simple';

export async function restrictToAdmin(req: any, res: any, next:Function) {
    try {
        const {user}= req.cookies
        const secret = process.env.SECRET_JWT;
        if(!secret){
            return res.status(500).send({error: "Internal server error"})
        }
        if(!user){
            return res.status(401).send({error: "User not logged in"})
        }
        const userDecoded = jwt.decode(user, secret)
        if(!userDecoded){
            return res.status(500).send({error: "Internal server error (code 3567)"})
        }
        
        if(userDecoded.role !== "admin"){
            return res.status(401).send({error: "User not allowed"})
        }
        

        next()
    } catch (error: any) {
        console.error(error)
        return res.status(500).send({ error: error.message })
        
    }  
    
}