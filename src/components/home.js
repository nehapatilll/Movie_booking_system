import React from 'react';
import SearchBar from './searchbar';


import { Link,useNavigate } from 'react-router-dom'; 
import './home.css';
function Home() {
    const navigate=useNavigate();
    const handleSearch = (searchTerm) => {
        console.log('Search term:', searchTerm);
  };
    const homeStyle = {
        textAlign: 'center', 
        color: 'White',     
      };

      const handleBook=()=>{
        navigate("/desc")
      }
  return (
    <div className="home" style={homeStyle}>
      <header>
        <h1>Welcome to Movie Booking System</h1>
        <p>Book your favorite movies now!</p>
   
        <div className="centered-search-bar">
        <SearchBar onSearch={handleSearch} />
        </div>
      </header>

      <main>
      <section className="featured-movies left-align">
  <div className="movie-card">
    <h2 className="kuku">RDX (UA)</h2>
    <div className="image-container">
      <img
        src="https://images.indianexpress.com/2023/08/rdx.jpg?w=640"
        alt="Kushi"
        className="movie-image"
      />
    </div>
    <button className="button-link" onClick={handleBook}>
      Book Now
    </button>
  </div>
</section>


        <section className="featured-movies left-align">
          
          <div className="movie-card">
            
            <h2 className="kuku">Kasargold (UA)</h2>
            <div className="image-container">
            <img src="https://static.toiimg.com/photo/103528760.cms" alt="Kasargold" className="movie-image"/>
            </div>
            <button className="button-link" onClick={handleBook}>
      Book Now
    </button>

          </div>
          
        </section>

        <section className="middle left-align">
          
          <div className="movie-card">
            
            <h2 className="kuku"> Kushi </h2>
            <div className="image-container">
            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/et00328665-jpzgzhjxvh-landscape.jpg" alt="Kushi" className="movie-image"/>
            </div>
            <button className="button-link" onClick={handleBook}>
      Book Now
    </button>

          </div>
          
        </section>
        <section className="middle-btm left-align">
          
          <div className="movie-card">
            
            <h2 className="kuku">Jawan (UA)</h2>
            <div className="image-container">
            <img src="https://static.toiimg.com/photo/msid-103359834/103359834.jpg"alt="Jawan" className="movie-image"/>
            </div>
            <button className="button-link" onClick={handleBook}>
      Book Now
    </button>

          </div>
          
        </section>

        <section className="btm-right left-align">
          
          <div className="movie-card">
            
            <h2 className="kuku">Nadhikalil Sundari Yamuna</h2>
            <div className="image-container">
            <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/nadikalil-sundari-yamuna-et00369468-1694503762.jpg" alt="Nadhikalil Sundari Yamuna" className="movie-image"/>
            </div>
            <button className="button-link" onClick={handleBook}>
      Book Now
    </button>
            

          </div>
          
        </section>
        <section className="top-right left-align">
          
          <div className="movie-card">
            
            <h2 className="kuku">Jailer</h2>
            <div className="image-container">
            <img src="https://imgeng.jagran.com/images/2023/aug/Jailer%20box%20office%20collection%20day%2031691896310332.jpg" alt="jailer" className="movie-image"/>
            </div><button className="button-link" onClick={handleBook}>
      Book Now
    </button>

          </div>
          
        </section>
        </main>


      
    </div>
  );
}

export default Home;
