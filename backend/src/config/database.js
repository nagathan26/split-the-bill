import mongoose from "mongoose";
import dotenv from "dotenv"


const connectDB  = async()=>{
    try {

        const databaseinstance =await mongoose.connect(`${process.env.MONGODB_URI}${process.env.DB_NAME}`)

        console.log(`mongodb connnection established ${databaseinstance.connection.host}`);
        
        
    } catch (error) {
        console.log(`error in connectiing the database :`,error.message);
        process.exit(1);
        
    }
}

export {
    connectDB
}