import { ClientModel } from "../models/clientModel";

export async function getUserDetails(req: any, res: any) {
  try {
    const { firstName, lastName, email, phone, yearOfBirth } = req.query; 

    const user = await ClientModel.findOne({
      firstName,
      lastName,
      email,
      phone,
      yearOfBirth,
    });

    if (!user) {
      console.log("User not found");
      return res.status(400).send({ error: "No user found" });
    }

    return res.status(200).send({
      message: "User found",
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        yearOfBirth: user.yearOfBirth,
      },
    });
  } catch (error) {
    console.error("Error occurred while retrieving user details:", error);
    return res.status(500).send({ error: "No data" });
  }
}
