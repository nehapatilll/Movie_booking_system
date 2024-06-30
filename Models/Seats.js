const mongoose = require('mongoose');
const seatSchema = new mongoose.Schema({
    seat_id:{
        type:Number,
        require:true,
        unique:true,
    },
    seat_no:{
        type:String,
        require:true,
    },
    seatStatus:{
        type:String,
        require:true,
        default:"available",
    }
});
module.exports=mongoose.model("Seats",seatSchema);
