import "../css/Seats.css"
import Seat from './Seat'
const Theater = () => {
  const numRows = 8;
  const seatsPerRow = 5;
  const theaterLayout = [];
  const handleBooking = (id) => {
    console.log("Seat clicked", id);
  };
  for (let row = 1; row <= numRows; row++) {
    const rowSeats = [];
    for (let seat = 1; seat <= seatsPerRow; seat++) {
      rowSeats.push(<Seat key={seat}id={seat} handleBooking={handleBooking}/>);
    }
    theaterLayout.push(
      <div key={row} className="row">
        {rowSeats}
      </div>
    );
  }
  const selectedSeats=[{}];
  
  
  return (
    <>
      <div className="booking">
        <h1>Book your seats</h1>
      </div>
      <div className="seats-type">
        <div className="seats-type-av"></div>
        <label>Available</label>
        <div className="seats-type-na"></div>
        <label>Reserved</label>
        <div className="seats-type-booked"></div>
        <label>Selected</label>
      </div>

      <div className="theater">{theaterLayout}</div>

      <div className="book-ticket">
        <button className="buy-ticket"> BUY TICKET</button>
      </div>
    </>
  );
};

export default Theater;
