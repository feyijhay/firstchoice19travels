import { useEffect, useState, useRef } from 'react';
import './Home.css';

const testimonials = [
  {
    text: '"Firstchoice19travels planned the perfect honeymoon for us! Everything was seamless, and we had the trip of a lifetime."',
    author: '— Mr. Ayo',
    stars: 5
  },
  {
    text: '"I highly recommend Firstchoice19travels. Their expertise and attention to detail made our family vacation unforgettable."',
    author: '— Ms. Glory',
    stars: 5
  },
  {
    text: '"From visa processing to flight booking, they handled everything professionally. Stress-free travel at its best!"',
    author: '— Mr. Emeka',
    stars: 4
  },
  {
    text: '"The Zanzibar trip they organized for us was absolutely breathtaking. Every detail was perfectly arranged."',
    author: '— Mrs. Fatima',
    stars: 5
  },
  {
    text: '"Their passport processing service saved me so much time. Fast, reliable, and very professional team."',
    author: '— Mr. Chidi',
    stars: 4
  },
  {
    text: '"Best travel agency in Lagos! They went above and beyond to make our Dubai trip truly special."',
    author: '— Ms. Adaeze',
    stars: 5
  }
];

function Home() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);
  const dragStart = useRef(null);
  const dragOffset = useRef(0);

  // drag / swipe on carousel
  const onDragStart = (e) => {
    dragStart.current = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    if (trackRef.current) trackRef.current.style.animationPlayState = 'paused';
  };
  const onDragEnd = (e) => {
    if (dragStart.current === null) return;
    const end = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX;
    dragOffset.current = end - dragStart.current;
    dragStart.current = null;
    if (trackRef.current) trackRef.current.style.animationPlayState = 'running';
  };

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
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>
            Your Dream Vacation Starts Here<br />
            Expert Travel Planning<br />
            Tailored Just for You
          </h1>
          <div className="cta-section">
            <a 
              href="https://wa.me/2349081601321" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="plan-trip-btn"
            >
              Plan Your Trip
            </a>
          </div>
        </div>
      </section>

      <section className="booking-section">
        <div className="container">
          <div className="booking-widget">
            <iframe 
              id="Subscription" 
              style={{ width: '100%', height: '220px', overflow: 'hidden' }} 
              frameBorder="0" 
              src="https://firstchoice19travels.myreservationagent.com/widget" 
              scrolling="no" 
              allow="popup" 
              allowFullScreen
              title="Flight Booking"
            ></iframe>
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="container">
          <h2 className="services-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3>Custom Itinerary Planning</h3>
              <p>We design personalized itineraries based on your interests, budget, and travel style. From flights and accommodations to activities and tours, we take care of everything.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-passport"></i>
              </div>
              <h3>Passport Processing</h3>
              <p>We assist with smooth and stress-free international passport application and renewal. Our team ensures accurate documentation and timely submission, saving you time and hassle.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-stamp"></i>
              </div>
              <h3>Visa Processing</h3>
              <p>Get expert guidance on tourist and travel visa applications for various countries. We handle documentation, appointments, and updates to simplify the entire process.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="packages-section">
        <div className="container">
          <h2 className="packages-title">Travel Packages</h2>
          <div className="carousel-track-wrapper"
            onMouseDown={onDragStart} onMouseUp={onDragEnd}
            onTouchStart={onDragStart} onTouchEnd={onDragEnd}
          >
            <div className="carousel-track" ref={trackRef}>
              <div className="carousel-slide"><img src="/easter zanzibar.jpeg" alt="Easter Zanzibar" /></div>
              <div className="carousel-slide"><img src="/summer zanzibar.jpeg" alt="Summer Zanzibar" /></div>
              <div className="carousel-slide"><img src="/visa.PNG" alt="Visa" /></div>
              <div className="carousel-slide"><img src="/desinations.PNG" alt="Destinations" /></div>
              <div className="carousel-slide"><img src="/passport.jpeg" alt="Passport" /></div>
              <div className="carousel-slide"><img src="/locations.jpeg" alt="Locations" /></div>
              {/* Duplicates for seamless loop */}
              <div className="carousel-slide"><img src="/easter zanzibar.jpeg" alt="Easter Zanzibar" /></div>
              <div className="carousel-slide"><img src="/summer zanzibar.jpeg" alt="Summer Zanzibar" /></div>
              <div className="carousel-slide"><img src="/visa.PNG" alt="Visa" /></div>
              <div className="carousel-slide"><img src="/desinations.PNG" alt="Destinations" /></div>
              <div className="carousel-slide"><img src="/passport.jpeg" alt="Passport" /></div>
              <div className="carousel-slide"><img src="/locations.jpeg" alt="Locations" /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-inner">
          <h2 className="testimonials-title">What they say about us</h2>
          <div className="stars">
            {'★'.repeat(testimonials[current].stars)}{'☆'.repeat(5 - testimonials[current].stars)}
          </div>
          <p className="testimonial-text">{testimonials[current].text}</p>
          <p className="testimonial-author">{testimonials[current].author}</p>
          <div className="testimonial-nav">
            <button className="nav-arrow" onClick={prev}>&#8249;</button>
            <button className="nav-arrow" onClick={next}>&#8250;</button>
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button key={i} className={`dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)}></button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
