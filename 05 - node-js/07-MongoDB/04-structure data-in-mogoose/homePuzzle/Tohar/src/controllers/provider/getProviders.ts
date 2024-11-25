import { userModel } from "../../models/userModel";

export function getProviders(req: any, res: any){
    userModel.find({ isProvider: true }).then(users => {
        if (!users || users.length === 0) {
            return res.status(404).json({ error: "No providers found" });
        }
          res.json(users);
    }).catch(error => {
          res.status(500).json({ error: "Internal Server Error" });
    });
}