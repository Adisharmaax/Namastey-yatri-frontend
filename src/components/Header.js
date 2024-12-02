import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-background">
        
        {/* Namastey Yatri Title */}
        <div className="title">Namastey Yatri</div>

        {/* Login and Sign Up Buttons */}
        <div className="header-buttons">
          <button className="login-btn" onClick={() => navigate('/auth')}>Login</button>
          <button className="signup-btn" >Sign Up</button>
        </div>

        {/* Hero Text */}
        <h1 className="hero-text">
          <span className="tagline">Best Of The Best</span><br />
          Originated from <span className="highlight">the best</span> <br />
          kept secret of India.
        </h1>

        {/* Subtitle */}
        <p className="header-subtitle">
          Go through the vibrant streets, ancient temples, and picturesque landscapes, as we unveil the essence of Odisha's heritage.
        </p>
        
        <a href="#" className="learn-more">Learn More</a>
        
        {/* Search Box */}
        <div className="search-box">
          <div className="search-item">
            <span className="search-icon">📍</span>
            <span className="search-label">Where To?</span>
            <input type="text" placeholder="Your location" className="search-input" />
          </div>
          <div className="search-item">
            <span className="search-icon">📅</span>
            <span className="search-label">When?</span>
            <input type="date" className="search-input" />
          </div>
          <div className="search-item">
            <span className="search-icon">👥</span>
            <span className="search-label">Guests?</span>
            <input type="number" placeholder="How many Guests?" className="search-input" />
          </div>
          <button className="book-now-btn">Book Now</button>
        </div>
      </div>
    </header>
  );
}

export default Header;