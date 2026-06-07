import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import cloudinary from 'cloudinary'


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
        const { text, image } = req.body;
        const { id:receiverId } = req.params;
        const senderId = req.user._id;

        let imageUrl;
        if(image) {
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;

        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image:imageUrl
        })

        await newMessage.save();

        return res.status(200).json(newMessage)
    } 
    catch(error) {
        return res.status(500).json({messsage:error.message});
    }
}