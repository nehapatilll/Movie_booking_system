import React from 'react';
//import './MyBooking.css'
const MyBookingPage=()=> {
  
  const recentBookings = [
    { id: 1, movieName: 'Movie A', date: '2023-09-20' ,TicketPrice:'RS 140/- ',ReservedSeats:'ReservedSeats:2'},
    { id: 2, movieName: 'Movie B', date: '2023-09-21',TicketPrice:'RS 140/- ',ReservedSeats:'ReservedSeats:1' },
  ];

  const previousBookings = [
    { id: 3, movieName: 'Movie C', date: '2023-09-18',TicketPrice:'RS 140/- ',ReservedSeats:'ReservedSeats:4' },
    { id: 4, movieName: 'Movie D', date: '2023-09-19',TicketPrice:'RS 140/- ',ReservedSeats:'ReservedSeats:3' },
  ];

  return (
    <div className='containers' >
    <div className='mybooking'>
      <h2>My Bookings</h2>
      <h3>Recent Bookings</h3>
      <ul>
        {recentBookings.map((booking) => (
          <li key={booking.id}>
            {booking.movieName} - {booking.date} - {booking.TicketPrice}-{booking.ReservedSeats}
            
          </li>
        ))}
      </ul>

      <h3>Previous Bookings</h3>
      <ul>
        {previousBookings.map((booking) => (
          <li key={booking.id}>
            {booking.movieName} - {booking.date} - {booking.TicketPrice}-{booking.ReservedSeats}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default MyBookingPage;
