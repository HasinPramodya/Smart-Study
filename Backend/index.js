import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import studentRouter from './router/student.router.js';


const app = express();
const port = 3000;

dotenv.config();

app.listen(port,()=>{
    console.log(`Server is started on :${port}`);
    mongoose.connect(process.env.MONGODB_URL).then(
        ()=>{
            console.log("Connected to MongoDB Database successfully");
        }
    ).catch(
        (err)=>{
            console.error("Connection Failed:", err);
        }
    )

})

app.use(bodyParser.json());

app.use('/api/student', studentRouter);




