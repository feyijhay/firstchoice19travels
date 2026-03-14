import React, { useEffect } from 'react';
import './Flights.css';

function Flights() {
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== "https://firstchoice19travels.myreservationagent.com") return;
      if (event.data.frameHeight) {
        const iframe = document.getElementById("Subscription");
        if (iframe) {
          iframe.style.height = event.data.frameHeight + "px";
        }
      }
    };

    window.addEventListener("message", handleMessage);
    
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="flights">
      <div className="page-header">
        <h1>Book Your Flight</h1>
        <p>Find and book the best flights for your journey</p>
      </div>
      <div className="booking-container">
        <iframe 
          id="Subscription" 
          style={{ width: '100%', height: '500px', overflow: 'hidden' }} 
          frameBorder="0" 
          src="https://firstchoice19travels.myreservationagent.com/widget" 
          scrolling="yes" 
          allow="popup" 
          allowFullScreen
          title="Flight Booking"
        ></iframe>
      </div>
    </div>
  );
}

export default Flights;
