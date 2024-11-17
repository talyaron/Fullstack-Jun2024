import express from "express";
import { checkSchedule } from "../controllers/checkScheduleCont";

export const router= express.Router();


router.post('/check-schedule', checkSchedule);

export default router;