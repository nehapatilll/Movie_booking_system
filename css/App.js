import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Seats from './components/Theater2';
import Signup from './components/Signup';
import Home from './components/home';
import Desc from './components/MovieDes';
import Theater from './components/Theater2';
import Navbar from './components/Navbar';
 import Aboutus from './components/Aboutus';
import MyBooking from './components/MyBooking';
import Contact from './components/ContactPage';
import Page from './components/Page';
import Rectangle from './components/Rectangle';

function App() {
  return (
    <div className="App">
      <div className="film">
      <h1>Filmflix</h1>
      </div>
          <div className="container">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Signup/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/desc" element={<Desc/>}/>
                <Route path="/Theater" element={<Theater/>}/>
                <Route path="/ContactPage" element={<Contact/>} />  
            <Route path="/MyBooking" element={<MyBooking/>} />
            <Route path="/Aboutus" element={<Aboutus/>} /> 
            <Route path="/Page" element={<Page/>}/>
            
              </Routes>
            </BrowserRouter>
          </div>
      
    </div>
  );
}

export default App;