import { connectDB } from "./config/database.js";
import dotenv from "dotenv"
import { app } from "./app.js";
dotenv.config();

const PORT = process.env.PORT

connectDB()
.then(()=>{
    app.listen(PORT,()=>{
       
       console.log(`server is running on port ${PORT}`);
       
        
    })
    
})
.catch((err)=>{
    console.error(`Something went wrong on server:`, err);
})






