import { ClientModel } from "../../models/clientModel";

export async function deleteClient(req: any, res: any) {
  try {
    const { key } = req.body;
    const deletedUser = await ClientModel.findOne({ key });
    if (!deletedUser) {throw new Error("no such user");}
    console.log(deletedUser);
  const actuallyDeleted=  await deletedUser.deleteOne();
  console.log(actuallyDeleted);
    res.json({ message: "user deleted" });
  } catch (error) {
    console.error("error");
    return res.status(500).send({ error: "something went Wrong!" });
  }
}
