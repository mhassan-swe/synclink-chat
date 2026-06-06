import { Router } from "express";
import { signUp, login ,logout ,updateProfile, checkAuth } from '../controllers/auth.controller.js'
import { protectRoute } from '../middleware/auth.middleware.js'

const authRoute = Router();

authRoute.post('/sign-up',signUp);
authRoute.post('/login',login);
authRoute.post('/logout',logout);

authRoute.put('/update_profile',protectRoute,updateProfile)

authRoute.get('/check',protectRoute,checkAuth)

export default authRoute;