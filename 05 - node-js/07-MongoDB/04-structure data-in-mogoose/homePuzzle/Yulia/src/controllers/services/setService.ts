import { ServiceModel } from "../../models/serviceModel";

export const createService = async (req: any, res: any) => {
  try {
    const newService = new ServiceModel(req.body);
    await newService.save();
    res.status(201).json(newService);
  } catch (error) {
    res.status(500).json({ message: "Failed to create service", error });
  }
};
