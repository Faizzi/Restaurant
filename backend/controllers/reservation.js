import ErrorHandler from "../error/error.js"
import { Reservation } from "../models/reservationSchema.js"

export const sendReservation = async(req,res,next)=>{
    const {firstName,lastName,email,phone,date,time} = req.body

    if(!firstName || !lastName || !email || !phone || !date || !time){
        return res.status(400).json({ success: false, message: "Plz fill the form!" });
    }
    if (!/^\d{11}$/.test(phone)) {
        return res.status(400).json({ success: false, message: "Phone number must contain only 11 digits" });
    }
    try {
        await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            date,
            time
        });
        res.status(200).json({
            success:true,
            message:"Reservation sent successfully."
        })
    } catch (error) {
         // Handle Mongoose validation errors
         if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                success: false,
                message: validationErrors.join(', ')
            });
        }
        return next(error);
    }

      
}