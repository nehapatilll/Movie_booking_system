const express=require('express');
const app=express();
const port=8000;
const cors=require('cors');
const mongoose=require('mongoose');
const Seat = require('./models/Seats');
app.use(cors());
app.use(express.json());
const {registerCreate} = require('./controllers/registerController')
const {getSeats}=require('./controllers/SeatsController');
const {Login}=require('./controllers/loginController')

const MONGODB_URL="mongodb+srv://anittapm1708:anittapm@cluster0.ru7auzd.mongodb.net/Movie_Booking?retryWrites=true&w=majority";
mongoose.connect(MONGODB_URL).then(()=>{
    console.log("Connected to DB");
},
(err)=>{
    console.log("Error connecting to DB",err);
});

// const seatData = [];

// for (let i = 1; i <= 40; i++) {
//   seatData.push({
//     seat_id: i,
//     seat_no: `Seat-${i}`,
//     seatStatus: 'available',
//   });
// }
// Seat.insertMany(seatData)
//   .then(() => {
//     console.log('Seats initialized successfully.');
//   })
//   .catch((error) => {
//     console.error('Error initializing seats:', error);
//   });

// app.get("/book",BookedSeat);
app.get("/seats",getSeats)
app.post("/register",registerCreate)
app.post("/login",Login)
app.listen(port,()=>{
console.log("server running on port :",port);
})