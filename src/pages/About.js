import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-content container">
        <div className="about-grid">
          <div className="about-image">
            <img src="/firstchoice.jpg" alt="FirstChoice19Travels" />
            <div className="owner-info">
              <h3>Omotolani .A. Lawal</h3>
              <p>Managing Director</p>
            </div>
          </div>
          <div className="about-text">
            <div className="about-section">
              <p>
                At FirstChoice19Travels, we believe travel is more than just getting from one place 
                to another. It's about creating meaningful memories and fostering connections across 
                cultures. With our years of industry experience, our expert team ensures every journey 
                is personalized, seamless, and stress-free.
              </p>
            </div>
            <div className="about-section">
              <p>
                We are passionate about travel and dedicated to crafting unique experiences tailored 
                to each client. Whether you're planning a solo adventure, a romantic getaway, or a 
                family vacation, we bring the same level of care and attention to every trip. From 
                the moment you reach out to us, we handle every detail so you can focus on enjoying 
                the journey.
              </p>
            </div>
            <div className="about-section">
              <p>
                Our services go beyond flight bookings. We assist with visa processing, international 
                passport applications, custom itinerary planning, and travel documentation, making us 
                your one-stop travel partner. Our mission is to transform your travel dreams into reality. 
                Whether you're seeking a relaxing beach getaway or a cultural immersion, we're here to 
                make it happen smoothly and memorably.
              </p>
            </div>
            <div className="about-section">
              <p>
                Based in Lagos, Nigeria, we proudly serve clients across the country and beyond. 
                Our team is always available to guide you, answer your questions, and ensure your 
                travel experience exceeds expectations every single time.
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
