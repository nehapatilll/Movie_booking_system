import React, { useState, useEffect } from 'react';
import Seat from './Seat'
import '../css/Seats.css'
const baseURL="http://localhost:8000";
const SeatBooking = () => {
  const [seatData, setSeatData] = useState({ availableSeats: [], takenSeats: [] });
  const [selectedSeats, setSelectedSeats] = useState([]);
const [seats,setSeats]=useState([]);
  useEffect(() => {
    // Fetch seat data from your backend API here and update seatData state.
    // You can use the Fetch API or a library like Axios for this.
    // Example fetch:
    fetch('http://localhost:8000/seats')
      .then((response) => response.json())
      .then((data) => {
        const available = data.filter(seat => seat.seatStatus==="available")
        const taken = data.filter(seat=>seat.seatStatus==="taken")
        setSeatData({availableSeats:available,takenSeats:taken});
        setSeats(data);
      })
      .catch((error) => console.error('Error fetching seat data:', error));
  }, []);
  
console.log(seatData)
  const handleSeatClick = (seatId) => {
    // Toggle the selection state of the seat
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };
  const bookingStyle = {
    textAlign: 'center', 
    color: 'White',     
  };
  const availableStyle = {
    textAlign: 'center', 
    color: 'White',     
  };
  const reservedStyle = {
    textAlign: 'center', 
    color: 'White',     
  };
  const selectedStyle = {
    textAlign: 'center', 
    color: 'White',     
  };
  
  return (<>
    <div className="booking" style={bookingStyle}>
        <h1>Book your seats</h1>
      </div>
      <div className="seats-type">
        <div className="seats-type-av"></div>
        <label className="available" style={availableStyle}>Available</label>
        <div className="seats-type-na"></div>
        <label className="reserved" style={reservedStyle}>Reserved</label>
        <div className="seats-type-booked"></div>
        <label className="selected" style={selectedStyle}>Selected</label>
      </div>
      <div className="seat-layout">
        <div>
        {seats.slice(0,8).map((seat) => (
          <Seat
            key={seat._id}
            selected={selectedSeats.includes(seat._id) ? 'selected-seat' : 'available-seat'}
            onClick={handleSeatClick}
          />
           
        
        ))}
        </div>
        <div>
        {seats.slice(8,16).map((seat) => (
          <Seat
            key={seat._id}
            selected={selectedSeats.includes(seat._id) ? 'selected-seat' : 'available-seat'}
            onClick={() => handleSeatClick(seat._id)}
          />
           
        
        ))}
        </div>
        <div>
        {seats.slice(16,24).map((seat) => (
          <Seat
            key={seat._id}
            selected={selectedSeats.includes(seat._id) ? 'selected-seat' : 'available-seat'}
            onClick={() => handleSeatClick(seat._id)}
          />
           
        
        ))}
        </div>
        <div>
        {seats.slice(24,32).map((seat) => (
          <Seat
            key={seat._id}
            selected={selectedSeats.includes(seat._id) ? 'selected-seat' : 'available-seat'}
            onClick={() => handleSeatClick(seat._id)}
          />
           
        
        ))}
        </div>
        <div>
        {seats.slice(32,40).map((seat) => (
          <Seat
            key={seat._id}
            selected={selectedSeats.includes(seat._id) ? 'selected-seat' : 'available-seat'}
            onClick={() => handleSeatClick(seat._id)}
          />
           
        
        ))}
        </div>
        
      </div>
    </>
  );
};

export default SeatBooking;