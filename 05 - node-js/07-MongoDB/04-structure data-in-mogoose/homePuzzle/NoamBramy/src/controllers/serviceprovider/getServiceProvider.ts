import { ServiceProviderModel } from "../../model/serviceprovider/serviceProviderModel";



export async function getServiceProvider(req: any, res: any) {
  try {
    const providers = await ServiceProviderModel.find({});
    res.status(200).json(providers);
  } catch (error:any) {
    res.status(500).json({ message: "Error fetching service providers", error: error.message });
  }
}