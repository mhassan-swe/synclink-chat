import { Router } from 'express'
import { protectRoute } from '../middleware/auth.middleware.js'
import { getUsersForSideBar, getMessages, sendMessage } from '../controllers/message.controller.js'

const messageRoute = Router();

messageRoute.get('/users',protectRoute,getUsersForSideBar);
messageRoute.get('/:id',protectRoute,getMessages)

messageRoute.post('/send/:id',protectRoute,sendMessage)

export default messageRoute;

