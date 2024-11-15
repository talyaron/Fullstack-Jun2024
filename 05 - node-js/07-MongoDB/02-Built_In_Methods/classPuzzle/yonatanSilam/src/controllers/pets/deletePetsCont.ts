import { PetModel } from "../../models/pets/petsModel";



 
export async function deletePets (req: any, res: any) {
    try {
        const { id } = req.body;
        if (!id) throw new Error("Missing title ");
        console.log(id)
        await PetModel.findByIdAndDelete(id)
        res.send({ message: "Post received",id });
      } catch (error) {
        console.error(error);
        res.status(400).send({ message: "Error: " + (error as Error).message });
      }
    }