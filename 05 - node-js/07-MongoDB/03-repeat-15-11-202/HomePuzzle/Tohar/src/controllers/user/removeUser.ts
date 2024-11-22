import { users, userModel } from "../../models/userModel";

export function removeUser(req:any, res:any):void {
        const { id } = req.body;

        userModel.deleteOne({ id: id })
        .catch(err => {
            console.error('Error deleting user:', err);
        });
        
    return res.json({ message: 'User deleted successfully', users });
};


