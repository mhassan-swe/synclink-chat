import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { generateToken } from '../lib/utils.js'

export const signUp = async (req, res) => {
    try {
        const { fullName, email, password } = req.body || {};
        
        if (!fullName || !email || !password) {
            return res.status(400).json({ message: "All fields (fullName, email, password) are required" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long" });
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        
        const hashedPassword = await bcrypt.hash(password, salt); 

        const newUser = new User({
            fullName,
            email,
            password: hashedPassword
        });

        if (newUser) {
            generateToken(newUser._id, res);
            await newUser.save();

            return res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePicture:newUser.profilePicture

            });
        } else {
            return res.status(400).json({ message: 'Invalid User data' });
        }
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const login =async (req,res) => {
    try{
        const { email, password } = req.body || {};

        if( !email || !password ){
            return res.status(400).json({message:"All fields are required"});
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid Credentials"});
        }

        const checkPassword = await bcrypt.compare(password,user.password)
        if(!checkPassword){
            return res.status(400).json({message:"Invalid Credentials"});
        }


        generateToken(user._id,res);

        return res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            profilePicture:user.profilePicture
        })
    }
    catch(error){
        return res.status(500).json({message:error.message});
    }
}