import express from 'express'
import { connectDB } from './src/lib/db.js'
import dotenv from 'dotenv'
import authRoute from './src/routes/auth.route.js'
import messageRoute from './src/routes/message.route.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express(); 

dotenv.config();

app.use(express.json());// allow json data to be parsed into req.body
app.use(cookieParser());
app.use( cors({
    origin:"http://localhost:5173",
    credentials:true,
}) )


app.use('/api/auth',authRoute);
app.use('/api/message',messageRoute);



const startServer = async () => {
    try {
        await connectDB();

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });

    } 
    catch (error) {
        console.log("Server failed to start", error);
    }
};

startServer();