import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

export const protectRoute = () => {
    try{
        const token = req.cookies.jwt;

        if(!token){
            return res.status(400).json({message:'Login required'});
        }


    }
    catch(error){
        return res.status(500).json({message:error.massage})
    }
}