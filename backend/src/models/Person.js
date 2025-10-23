import mongoose from "mongoose";

const PersonSchema = new mongoose.Schema({
  name:{

    type : String,
    required:[true,"Person name is required"],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],

  },
  email:{
    type:String,
    trim:true,
    lowercase:true,


  },
  phone:{
    type:String,
    trim:true,

  }

},{timestamps:true})

const persons = mongoose.model("persons",PersonSchema);

export{
    persons
}