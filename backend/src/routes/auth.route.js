import { Router } from "express";
import { signUp, login, logout} from '../controllers/auth.controller.js'

const router = Router();

router.post('/sign-up',signUp)
router.post('/login',login)
router.get('/logout',logout)


export default router;