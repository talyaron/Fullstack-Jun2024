import express from 'express';
import { addPet } from '../controllers/pets/setPetsCont';
import { getPets } from '../controllers/pets/getPetsCont';
import { deletePets } from '../controllers/pets/deletePetsCont';



const router = express.Router()

router.post('/add-pet', addPet);
router.get('/get-pets', getPets);
router.delete('/delete-pets', deletePets);


export default router;