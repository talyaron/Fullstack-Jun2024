import { UserModel } from "../models/userModel";

export async function updateUser(req: any, res: any) {
    try {
        const { email, updates } = req.body;

        if (!email || !updates || Object.keys(updates).length === 0) {
            return res.status(400).send({ error: "Invalid input: email and updates are required" });
        }

        const updatedUser = await UserModel.findOneAndUpdate(
            { email },
            { $set: updates },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).send({ error: "User not found" });
        }

        res.status(200).send({
            message: "User updated successfully",
            user: updatedUser,
        });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).send({ error: "An error occurred" });
    }
}