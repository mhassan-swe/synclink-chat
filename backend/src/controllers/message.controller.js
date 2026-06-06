import User from "../models/user.model.js";
import Message from "../models/message.model.js";


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
    try{
        const { id:userToChatId } = req.params;
        const myId = req.user._id;

        const message = await Message.find(
            { 
                $or:[ 
                    {senderId :myId, receiverId:userToChatId},
                    {senderId:userToChatId,receiverId:myId}
                ] 
            }
        )

        return res.ststus(200).json(message);
    }
    catch(error){
        console.log('Error in getMessage',error.message);
        return res.status(500).json({message:error.message})

    }
}

export const sendMessage = async (req,res) => {
    try{
        
    } 
    catch(error) {
        
    }
}