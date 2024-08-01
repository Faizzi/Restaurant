import mongoose, { mongo } from "mongoose";
import validator from "validator";
const reservationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"Frist name must contain at least 3 characters."],
        maxLength:[15,"Frist name must contain at least 15 characters."]
    } ,
    lastName:{
        type:String,
        required:true,
        minLength:[3,"Last name must contain at least 3 characters."],
        maxLength:[15,"Last name must contain at least 15 characters."]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,'Provide a valid email.']
    },
    phone:{
        type:String,
        required:true,
        minLength:[11,"Phone number must contain only 11 digits"],
        maxLength:[11,"Phone number must contain only 11 digits"]
    },
    time:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },

})

export const Reservation = mongoose.model("Reservation",reservationSchema)