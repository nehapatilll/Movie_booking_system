import React from 'react';
import './Page.css';
function Rectangle({ movie_id }) {
  // Define a mapping of movie_ids to corresponding text
  const movieTextMap = {
    1: 'Jawan(UA)',
    2: 'RDX(UA)',
    3:'Nun(UA)',
    // Add more movie_ids and corresponding text as needed
  };

  // Get the text based on the movie_id or provide a default value
  const movieText = movieTextMap[movie_id] || 'Unknown Movie';

  return (
    <div className="rectangle">
      <div className="text-left">{movieText}</div>
      <div className="center-right-container">
        <button className="center-rectangle">
          <div>
          <pm>10:00 am  </pm></div>
          <pt>DOLBY 7.1</pt>
        </button>
        <button className="center-rectangle">
          <div><pm>12:00 pm</pm></div>
          <pt>DOLBY 7.1</pt>   
        </button>
        <button className="center-rectangle">
          <div><pm>4:00 pm</pm></div>
          <pt>DOLBY 7.1</pt>
        </button>
        <button className="center-rectangle">
          <div><pm>10:00 pm</pm></div>
          <pt>DOLBY 7.1</pt>
        </button>
      </div>
    </div>
  );
}

export default Rectangle;