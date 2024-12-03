import { UserModel } from "../../models/userModel";

//deleteUserById
export async function deleteUserById (req: any, res: any) {
    try {
        const { id } = req.body;
        if (!id) {
            return res.status(400).send({ message: "Missing user ID" });
          }    
          const user = await UserModel.findByIdAndDelete(id);
          if (!user) {
            return res.status(404).send({ message: "User not found" });
          }

        res.send({ message: "User deleted successfully", user });
      } catch (error) {
        console.error(error);
        res.status(400).send({ message: "Error: " + (error as Error).message });
      }
    }