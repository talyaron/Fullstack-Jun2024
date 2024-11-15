import express from 'express';
import { user } from '../models/userModel';
const router = express.Router();


router.get('/register', (req, res) => {
    res.json({user});
});

export default router;