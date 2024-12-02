import React from 'react';

function Packages() {
  return (
    <section className="packages">
      <h2>Your Passport To Experiencing The Rich Tapestry Of Odisha's Culture</h2>
      <div className="package-cards">
        {Array(8).fill().map((_, index) => (
          <div className="package-card" key={index}>
            <div className="package-image"></div>
            <div className="package-info">
              <h3>Mountain</h3>
              <p>356 Tours, 248 Activities</p>
              <a href="#" className="more-info">➔</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Packages;