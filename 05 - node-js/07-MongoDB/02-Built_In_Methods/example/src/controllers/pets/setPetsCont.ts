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