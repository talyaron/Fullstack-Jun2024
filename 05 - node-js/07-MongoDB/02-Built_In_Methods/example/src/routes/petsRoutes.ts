import express from 'express';
import { addPet } from '../controllers/pets/setPetsCont';
import { getPets } from '../controllers/pets/getPetsCont';



const router = express.Router()

router.post('/add-pet', addPet);
router.get('/get-pets', getPets);

export default router;