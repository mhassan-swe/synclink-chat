import User from "../models/user.model.js";

export const getUsersForSideBar = async (req,res) => {
    try{
        const loggedInUserId = req.body._id;
        const filteredUsers = await User.find({ _id: {$ne:loggedInUserId} }).select('-password');
        return res.status(200).json(filteredUsers)
    }
    catch(error){
        return res.status(500).json({message:error.message});
    }
} 

export const getMessages = async (req,res) => {
    try{}
    catch(error){
        
    }
}