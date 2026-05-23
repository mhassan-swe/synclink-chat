import User from '../models/user.model.js'

export const signUp = (req,res) => {
    const { fullname, email, password } = req.body;
    try{
        if(!fullname || !email || !password){
             return res.status(400).json({message:"All fields are required"})
        }

        if( password.length < 6 ){
            return res.status(400).json({message:"Password must be atleat 6 digits"})
        }
        

        const user = await User.findOne({email});

        if(user){
            return res.status(400).json({message:"User already exist"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword =await bcrypt.hash(password,salt)

        const newUser = new User({
            fullname,
            email,
            password:hashedPassword
        })

       await newUser.save();

        
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