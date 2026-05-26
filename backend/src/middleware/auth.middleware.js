import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

export const protectRoute = (req,res,next) => {
    try{
        const token = req.cookies.jwt;

        if(!token){
            return res.status(400).json({message:'No token exist!'});
        }

        const decoded  = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({message:'Invalid Token'})
        }

        const user = await User.findById(doceded.userId).select('-password');
        if(!user){
            return res.status(401).json({message:'User not found'})
        }

        req.user = user;
        next();


    }
    catch(error){
        return res.status(500).json({message:error.massage})
    }
}