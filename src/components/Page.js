import { useState } from 'react';
import React from 'react';
import './Page.css';
import Rectangle from './Rectangle'; // Import the Rectangle component



function Page() {
  const [clickedSquare, setClickedSquare] = useState(null);

  const handleSquareClick = (squareNumber) => {
    setClickedSquare(squareNumber);
  };
  return (
    
    <div className="page">
     
      <div className="main_rectangle">
        <span className="arrow">&lt;</span>
        <button
        className={`square1 ${clickedSquare === 1 ? 'clicked' : ''}`}
        onClick={() => handleSquareClick(1)}
      >
          <span className='md1'>19 SEP</span>
        </button>
        <button
        className={`square2 ${clickedSquare === 2 ? 'clicked' : ''}`}
        onClick={() => handleSquareClick(2)}
      >
          <span className='md2'>20 SEP</span>
        </button>
        <button
        className={`square3 ${clickedSquare === 3 ? 'clicked' : ''}`}
        onClick={() => handleSquareClick(3)}
      >
          <span className='md3'>21 SEP</span>
          {/* <span className="arrow">&gt;</span> */}
        </button>
        <span className="arrow">&gt;</span>
      </div>
      
      {/* Include the Rectangle component */}
      <Rectangle />
      
    </div>
  );
}

export default Page;