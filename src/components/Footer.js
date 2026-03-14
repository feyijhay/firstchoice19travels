import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="footer-container">
        <div className="footer-content">

          {/* Column 1: logo + company name + tagline */}
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo.jpg" alt="FirstChoice19travels" />
              <div className="footer-logo-info">
                <span className="footer-logo-text">FirstChoice19travels</span>
                <span className="footer-tagline">Journey On, Make Memories.</span>
              </div>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            {/* <a href="tel:+2349081601321">090 8160 1321</a>
            <a href="tel:+2347036323199">070 3632 3199</a>
            <a href="mailto:firstchoice19travels@gmail.com">firstchoice19travels@gmail.com</a> */}
            <div className="social-icons">
              <a href="https://instagram.com/Firstchoice19travels" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://tiktok.com/@Firstchoice19_travels" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="TikTok">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="https://wa.me/2349081601321" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="mailto:firstchoice19travels@gmail.com" className="social-icon" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Column 3: Office Address */}
          <div className="footer-section">
            <h3>Office Address</h3>
            <p>Shop 8, Jesus Plaza,<br />Boys Town Bus Stop,<br />Ipaja, Lagos.</p>
          </div>

        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 FirstChoice19travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
