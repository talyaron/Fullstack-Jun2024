import { UserModel, UserSchema } from "../../models/userModel";

export async function updateName(req: any, res: any) {
  try {
    const { title, id } = req.body;
    if (!title || !id) throw new Error("Missing title ");

    const user = await UserModel.findOneAndUpdate(
      { _id: id }, // Match document by id
      { name: title }, // Update the `name` field
      { new: true } // Return the updated document
    );
    if (!user) throw new Error("not find post");

    res.send({ message: "user name change", user });
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: "Error: " + (error as Error).message });
  }
}
