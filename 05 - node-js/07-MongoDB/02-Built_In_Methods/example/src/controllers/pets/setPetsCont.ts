import { PetModel } from "../../models/pets/petsModel";


export async function addPet(req: any, res: any) {
    try {
        const { name, gender, imageURL } = req.body;
        console.log(name, gender,imageURL)
        if (!name || !gender || !imageURL) {
            return res.status(400).json({ error: "All fields (name, text, imageURL) are required" });
        }

        const newPet = await PetModel.create({ name, gender, imageURL });


        res.status(201).json({ message: "Post added successfully", pet: newPet });
    } catch (error) {
        console.error('Error adding post:', error);
        res.status(500).json({ error: 'Failed to add post' });
    }
}

export async function deletePet(req: any, res: any) {
    try {
        const { id } = req.body;
        if (!id) return res.status(400).json({ error: "ID is required" });

        const pet = await PetModel.findByIdAndDelete(id);
        if (!pet) return res.status(401).json({ error: "Pet not found" });

        res.status(200).json({ message: "Pet deleted successfully" });
    } catch (error) {
        console.error('Error deleting pet:', error);
        res.status(500).json({ error: 'Failed to delete pet' });
    }
}