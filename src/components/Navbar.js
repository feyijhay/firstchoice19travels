import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleHome = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
    setMenuOpen(false);
  };

  const handleScroll = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={handleHome}>
          <img src="/logo.jpg" alt="FirstChoice19Travels" className="logo-img" />
          FirstChoice19Travels
        </Link>

        <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>

        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <li><a href="/" className="nav-link" onClick={handleHome}>Home</a></li>
          <li><Link to="/flights" className="nav-link" onClick={() => setMenuOpen(false)}>Flights</Link></li>
          <li><a href="/#services" className="nav-link" onClick={handleScroll('services')}>Services</a></li>
          <li><a href="/#packages" className="nav-link" onClick={handleScroll('packages')}>Packages</a></li>
          <li><Link to="/destinations" className="nav-link" onClick={() => setMenuOpen(false)}>Destinations</Link></li>
          <li><Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><a href="#footer" className="nav-link" onClick={(e) => { e.preventDefault(); setMenuOpen(false); document.getElementById('site-footer')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
