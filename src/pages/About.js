import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-content container">
        <div className="about-grid">
          <div className="about-image">
            <img src="/owner.jpg" alt="Omotolani A. Lawal" />
            <div className="owner-info">
              <h3>Omotolani .A. Lawal</h3>
              <p>Managing Director</p>
            </div>
          </div>
          <div className="about-text">
            <div className="about-section">
              <p>
                At FirstChoice19Travels, we believe travel is about creating meaningful memories 
                and fostering connections across cultures. With our years of industry experience, 
                our expert team ensures every journey is personalized and stress-free.
              </p>
            </div>
            <div className="about-section">
              <p>
                We are passionate about travel and dedicated to creating unique, personalized 
                experiences for our clients. With years of experience exploring the globe, we 
                offer expert advice and meticulous planning to ensure your trip is seamless 
                and memorable.
              </p>
            </div>
            <div className="about-section">
              <p>
                Our mission is to transform your travel dreams into reality. Whether you're 
                seeking a relaxing beach getaway, an adventurous trek, or a cultural immersion, 
                we're here to handle every detail.
              </p>
            </div>
            <div className="about-section">
              <p className="cta-text">
                Ready to start your journey? Let's make your next adventure unforgettable!
              </p>
              <a 
                href="https://wa.me/2349081601321" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="about-btn"
              >
                Plan Your Trip
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
