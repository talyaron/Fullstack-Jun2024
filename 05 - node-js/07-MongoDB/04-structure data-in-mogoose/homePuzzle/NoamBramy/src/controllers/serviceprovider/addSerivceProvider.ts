import { ServiceProviderModel } from "../../model/serviceprovider/serviceProviderModel";


export async function addServiceProvider(req:any, res:any) {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const newServiceProvider = new ServiceProviderModel({ name });
    await newServiceProvider.save();

    res.status(201).json({ message: "Service provider added", provider: newServiceProvider });
  } catch (error:any) {
    res.status(500).json({ message: "Error adding service provider", error: error.message });
  }
}