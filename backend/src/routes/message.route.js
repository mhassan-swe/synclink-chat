import { Router } from 'express'
import { protectRoute } from '../middleware/auth.middleware.js'
import { getUsersForSideBar, getMessages } from '../controllers/message.controller.js'

const messageRoute = Router();

messageRoute.get('/users',protectRoute,getUsersForSideBar);
messageRoute.get('/:id',protectRoute,getMessages)

export default messageRoute;

