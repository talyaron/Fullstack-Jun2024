import { ClientModel, ClientSchema } from "../models/clientModel";

export async function addClient(req: any, res: any) {
  try {
    const { firstName, lastName, email, phone, yearOfBirth, password } =
      req.body;
    const result = await ClientModel.create({
      firstName,
      lastName,
      email,
      phone,
      yearOfBirth,
      password,
    });
    console.log(result);

    if (!result) {
      return res.status(400).send({ error: "Couldn't create new client!" });
    }

    return res
      .status(201)
      .send({ message: "Client was created successfully!" });
  } catch (error) {
    console.error("error");
    return res.status(500).send({ error: "Nothing" });
  }
}
