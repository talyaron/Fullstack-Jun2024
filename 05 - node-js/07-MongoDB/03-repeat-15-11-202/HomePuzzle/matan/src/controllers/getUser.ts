import {UserModel} from '../models/userModel'
export async function getUser (req:any, res:any){
    try{
        const{firstName, lastName, email, phone, yearOfBirth} = req.query
        
        const user = await UserModel.findOne({
            firstName,
            lastName,
            email,
            phone,
            yearOfBirth,
        })

        if (!user){
            console.log("user not found");
            return res.status(400).send({error:"no user found"});
        }

        return res.status(200).send({
            message:"user found",
            user:{
                firstName: user.firstName,
                lastName:user.lastName,
                email:user.email,
                phone:user.phone,
                yearOfBirth:user.yearOfBirth,
            },
        });
    }catch(error){
    console.error("error")
    return res.status(500).send ({error:"no data"});
    }
}