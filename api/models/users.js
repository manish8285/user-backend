
const mongoose = require("mongoose")
const validator = require("validator")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
        email:{
            type:String,
            required:true,
            unique:[true,"Email id is already present"],
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Invalid Email")
                }
            }
        },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:true
    }
    
})


//create new collection
const Users = new mongoose.model("User",userSchema)

module.exports= Users