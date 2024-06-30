
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Seats from './components/Theater2';
import Signup from './components/Signup';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      
        <div className="App">
          <div className="container">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Signup/>}/>
                <Route path="/Home" element={<Home/>}/>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      
    </div>
  );
}

export default App;
