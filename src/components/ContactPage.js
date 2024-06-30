import './Contact.css';
import React from 'react';
//import { FaMapMarker, FaEnvelope, FaPhone } from 'react-icons/fa';
//import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const ContactPage = () => {
  const mapPosition = [51.505, -0.09]; 
  return (
    <div>
      <footer>
        <div className="contact-info">
          <div className="info-item">
             123 Main Street, City, Country
          </div>
          <div className="info-item">
             email@email.com
          </div>
          <div className="info-item">
             123-456-7890
          </div>
        </div>
      </footer>
      {/* <div className="map"> */}
        {/* <h2>Our Location</h2> */}
        {/* <MapContainer
          center={mapPosition}
          zoom={13}
          style={{ width: '100%', height: '400px' }}
        >
          <TileLayer
            url="https://th.bing.com/th/id/OIP.yvauclQ-ruJZlVLQBwSYPAHaHa?pid=ImgDet&rs=1.png"
            attribution='&copy; <a href="https://www.bing.com/search?pglt=673&q=latitude+and+longitude+of+ashirvad+cinema&cvid=5b639aa29d7745e38d22407a0208fc01&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEJMTY4MjlqMGoxqAIAsAIA&FORM=ANNTA1&PC=HCTS">OpenStreetMap</a> contributors'
          />
          <Marker position={mapPosition}></Marker>
        </MapContainer> */}
      </div>
    // </div>
  );
};

export default ContactPage;
