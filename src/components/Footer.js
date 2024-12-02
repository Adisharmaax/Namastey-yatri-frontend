import React from 'react';
import insta from '../assets/insta.png';
import twitter from '../assets/twitter.png';
import fbb from '../assets/fbb.png'
import youtube from '../assets/youtube.png';
import logo from '../assets/Logo.png';


function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter">
        <div className="newsletter-text">
          <h2>Subscribe Newsletter</h2>
          <p className="newsletter-title">The Travel</p>
          <p className="newsletter-description">
            Get inspired! Receive travel discounts, tips, and behind the scenes stories.
          </p>
          <div className="subscription">
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-links">
          <div>
            <h4>Our Destinations</h4>
            <p>Canada</p>
            <p>Alaska</p>
            <p>France</p>
            <p>Iceland</p>
          </div>
          <div>
            <h4>Our Activities</h4>
            <p>Northern Lights</p>
            <p>Cruising & Sailing</p>
            <p>Multi-activities</p>
            <p>Kayaking</p>
          </div>
          <div>
            <h4>Travel Blogs</h4>
            <p>Bali Travel Guide</p>
            <p>Sri Lanka Travel Guide</p>
            <p>Peru Travel Guide</p>
          </div>
          <div>
            <h4>About Us</h4>
            <p>Our Story</p>
            <p>Work with us</p>
          </div>
          <div>
            <h4>Contact Us</h4>
            <p>Our Story</p>
            <p>Work with us</p>
          </div>
        </div>
        <div className="footer-icons">
          {/*<img src={logo} alt="Company Logo" />*/}
          <img src={youtube} alt="youtube Icon" />
          <img src={twitter} alt="twitter Icon" />
          <img src={fbb} alt="facebook Icon" />
          <img src={insta} alt="instagram Icon" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;