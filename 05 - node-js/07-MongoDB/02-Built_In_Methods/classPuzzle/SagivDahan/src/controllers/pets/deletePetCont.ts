import { PetModel } from "../../models/pets/petsModel";

export async function deletePet (req: any, res: any) {
    const petID = req.params.id;
    console.log("Received pet ID for deletion:", petID);
    try {
        const deletedPet = await PetModel.findByIdAndDelete(petID);
        if (deletedPet) {
            res.send({ message: "Pet deleted successfully." });
        } else {
            res.status(404).send({ message: "Pet not found." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error deleting pet." });
    }
}