import { userModel } from '../../models/userModel';

export function getUser(req:any, res:any) {
    try {
            const { email } = req.body;
        
            userModel.findOne({email: email}).then(user => {
                res.json(user);
                console.log(user);
            }); 
            
        
        } catch (error) {
            console.error("Error in /api/getUser:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
}