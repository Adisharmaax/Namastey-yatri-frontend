import React from 'react';


function HowWeWork() {
  return (
    <section className="how-we-work">
      <h2>Glimpse Of How We Work</h2>
      <div className="workflow-container">
        
        {/* Left side with images */}
        <div className="images-section">
          <div className="main-image"></div>
          <div className="small-images">
            <div className="small-image"></div>
            <div className="small-image"></div>
          </div>
        </div>
        
        {/* Right side with workflow items */}
        <div className="workflow">
          <div className="workflow-item">
            <h3>Pay and Go</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            <a href="#">Learn More →</a>
          </div>
          <div className="workflow-item">
            <h3>Pay and Go</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            <a href="#">Learn More →</a>
          </div>
          <div className="workflow-item">
            <h3>Pay and Go</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            <a href="#">Learn More →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;