import mongoose from "mongoose";

const resturantSchema = new mongoose.Schema({
    name :{
        type : String,
        required : [true,'Restaurant name is required'],
        trim : true,
        minlength : [2,"Restaurant name must be at least 2 characters"]


    },
    location:{
        type : String,
        required : [true,"location is manditory"],
        trim : true

    }
},{timestamps:true})

const resturants = mongoose.model("resturants",resturantSchema)

export{
    resturants
}