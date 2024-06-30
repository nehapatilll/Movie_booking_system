const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
    booking_id:{
        type:Number,
        require:true,
        unique:true,
    },
    user_id:{
        type:Number,
        require:true,
    },
    seat_id:{
        type:Number,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    }
})
module.exports = mongoose.model("Booking",bookingSchema);
