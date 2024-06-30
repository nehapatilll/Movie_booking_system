const mongoose = require('mongoose');
const Seat = require('./models/Seat'); // Replace with the correct path to your Seat model

mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create an array of seat data with 40 seats, all with the status 'available'
const seatData = [];

for (let i = 1; i <= 40; i++) {
  seatData.push({
    seat_id: i,
    seat_no: `Seat-${i}`,
    seatStatus: 'available',
  });
}

// Insert the seat data into the database
Seat.insertMany(seatData)
  .then(() => {
    console.log('Seats initialized successfully.');
  })
  .catch((error) => {
    console.error('Error initializing seats:', error);
  });
