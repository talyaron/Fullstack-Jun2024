import { ServiceProviderModel } from "../../model/servicePrividers/serviceProvidersModel";

export async function addServiceProvider(req: any, res: any) {
  try {
    const { id, firstName, lastName, serviceId } = req.body;

    const result = await ServiceProviderModel.create({
        id, firstName, lastName, serviceId
    });
    console.log(result);
  } catch (error: any) {
    console.error(error);
    return res.status(500).send({ error: error.message });
  }
}
