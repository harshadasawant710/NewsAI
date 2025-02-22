import express from "express"
import dotenv from "dotenv"
import dbConnect from "./config/db.js";
import userRoutes from './routes/userRoutes.js'
import cors from "cors"; // ✅ Import CORS

const app = express();

app.use(express.json())
dotenv.config()
dbConnect();

app.use(cors({ // ✅ Allow frontend to call API
    origin: "http://localhost:5173",
    credentials: true, // ✅ Allows cookies if used
}));

app.use('/auth',userRoutes)

// console.log(process.env.PORT)
app.listen(process.env.PORT, ()=>{
    console.log(`server is running on PORT ${process.env.PORT}`);
})