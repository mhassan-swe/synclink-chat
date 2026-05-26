import { Router } from "express";
import { signUp, login ,logout ,updateProfile } from '../controllers/auth.controller.js'
import { protectRoute } from '../middleware/auth.middleware.js'

const router = Router();

router.post('/sign-up',signUp);
router.post('/login',login);
router.post('/logout',logout);

router.put('/update_profile',protectRoutue,updateProfile)



export default router;