import { PetModel } from "../../models/pets/petsModel";


export async function deletePet(req:any,res:any) {
try{
    const { id } =req.body;   
    const postToDelete =  await PetModel.findOne(id);
    if(!postToDelete) throw new Error("no post found!");
    await postToDelete.deleteOne();
    res.json({message:"post deleted successfully"});
} catch (error) {
    console.error("Error fetching pets:", error);
    res.status(500).json({ error: "Failed to fetch posts" });
   
  }
}