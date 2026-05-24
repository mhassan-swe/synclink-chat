import { Router } from "express";
import { signUp, login ,logout ,updateProfile } from '../controllers/auth.controller.js'

const router = Router();

router.post('/sign-up',signUp);
router.post('/login',login);
router.post('/logout',logout);

router.put('/update_profile',protectRoutue,updateProfile)



export default router;