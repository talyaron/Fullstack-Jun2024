import { PetModel } from "../../models/pets/petsModel";



export async function getPets (req:any, res:any) {
   try {
        const pets = await PetModel.find();
        res.status(200).json({pets});
   } catch (error) {
     console.error("Error fetching pets:", error);
     res.status(500).json({ error: "Failed to fetch posts" });
    
   }
}