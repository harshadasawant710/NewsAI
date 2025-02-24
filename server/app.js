import express from "express"
import dotenv from "dotenv"
import dbConnect from "./config/db.js";
import userRoutes from './routes/userRoutes.js'
import cors from "cors"; 
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json())
dotenv.config()
dbConnect();

app.use(cors({ 
    origin: "http://localhost:5173",
    credentials: true, 
}));

app.use(cookieParser());

app.use('/auth',userRoutes)

// console.log(process.env.PORT)
app.listen(process.env.PORT, ()=>{
    console.log(`server is running on PORT ${process.env.PORT}`);
})