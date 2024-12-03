import express from 'express';
import { addPet } from '../controllers/pets/setPetsCont';
import { getPets } from '../controllers/pets/getPetsCont';
import { deletePet } from '../controllers/pets/deletePetCont';

const router = express.Router()

router.post('/add-pet', addPet);
router.get('/get-pets', getPets);
router.delete('delete-pet', deletePet);
export default router;