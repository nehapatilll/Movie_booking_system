
import React, { useState, useEffect } from 'react';
import './movieDes.css';
import {useNavigate} from 'react-router-dom';

const MovieDes = ({ movieId }) => {
  const [movie, setMovie] = useState({
    name: 'RDX',
    rating: 8.5,
    description: 'Dynamic fight sequences, high-stakes stunts, tension-filled moments, nostalgia, and electrifying music define the hyperactive action film. RDX portrays the story of three angry men in Kochi: brothers Robert and Dony, along with their friend Xavier',
    language: 'Malayalam',
    imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.nowrunning.com%2Fcontent%2Fmovie%2F2023%2Frdx-26817%2FStills%2Frdx_2023818.jpg&tbnid=ETd_KTjI5Qqy3M&vet=12ahUKEwjxm-H3h7aBAxUxTGwGHcoQA1IQMygAegQIARBF..i&imgrefurl=https%3A%2F%2Fwww.nowrunning.com%2Fmovie%2F26817%2Frdx%2Fgallery%2F&docid=So59BuYOnBBMlM&w=650&h=812&q=rdx%20poster&ved=2ahUKEwjxm-H3h7aBAxUxTGwGHcoQA1IQMygAegQIARBF',
  });
  const navigate=useNavigate()
  useEffect(() => {
    // Replace 'your_backend_api_url' with your actual API endpoint that accepts a movie_id parameter
    fetch(`your_backend_api_url?movie_id=${movieId}`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data); // Update movie state with data from the backend
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  }, [movieId]); // Trigger the effect whenever movieId changes
  const aboutStyle={
    color: 'White',
  };
  const handleBookTickets=()=>{
    navigate("/Theater")
  }
  return (
    <div className="c1">
      <div className="movie-details">
        <h2>{movie.name}</h2>
        <img src="https://images.indianexpress.com/2023/08/rdx.jpg?w=640" alt={movie.name} className="movie-poster" />
        <div className='content'>
          <p>Rating: {movie.rating}/10</p>
          <p>Language: {movie.language}</p>
          <button className='b1' onClick={handleBookTickets}>Book tickets</button>
        </div>
      </div>
      <div className='about' style={aboutStyle}>
      <h3>About The Movie</h3>
      <p>{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieDes;
