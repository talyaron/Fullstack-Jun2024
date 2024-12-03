import { ServiceProviderModel } from "../../models/serviceProvaiderModel";

export const createServiceProvider = async (req: any, res: any) => {
  try {
    const newServiceProvider = new ServiceProviderModel(req.body);
    await newServiceProvider.save();
    res.status(201).json(newServiceProvider);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create service provider", error });
  }
};
