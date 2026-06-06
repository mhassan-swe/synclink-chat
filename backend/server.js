import express from 'express'
import { connectDB } from './src/lib/db.js'
import dotenv from 'dotenv'
import router from './src/routes/auth.route.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express(); 

dotenv.config();

app.use(express.json());// allow json data to be parsed into req.body
app.use(cookieParser());
app.use('/api/auth',router);



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