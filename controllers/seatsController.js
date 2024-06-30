const seats=require('../models/Seats')
const getSeats=(req,res)=>
{
    seats.find().then((data)=>
    {
        console.log(data)
        res.json(data);
    })
    .catch((err)=>{
        res.send(err)
    })
}
module.exports={getSeats}
