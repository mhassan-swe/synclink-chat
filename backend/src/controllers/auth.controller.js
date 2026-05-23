import User from '../models/user.model.js'

export const signUp = (req,res) => {
    const { fullname, email, password } = req.body;
    try{
        if( password.length < 6 ){
            return res.status(400).json({"Password must be atleat 6 digits"})
        }
        if(!fullname || !email || !password){
             return res.status(400).json({"All fields are required"})
        }



    }
    catch(error){
        return res.status(500).json({message:error.message})
    }
};

export const login = (req,res) => {
    try{}
    catch(error){
        return res.status(500).json({message:error.message})
    }
};

export const logout = (req,res) => {
    try{}
    catch(error){
        return res.status(500).json({message:error.message})
    }
};