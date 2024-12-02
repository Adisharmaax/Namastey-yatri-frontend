import React from 'react';
import { Helmet } from 'react-helmet';

function AboutUs() {
  return (
    <div className="aboutUsContainer">
      {/* Helmet to include Bootstrap CSS */}
      <Helmet>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-M4QdqIaxnGfHedB2mqPxlA8NVEVtnFovKz1aYmYl9/4d8e9jjP50/jGmuh7QXvEw"
          crossOrigin="anonymous"
        />
      </Helmet>

      {/* About Section */}
      <div className="aboutSection">
        <h2>ABOUT US</h2>
        <p>
          Your Passport To Experiencing The Rich Tapestry Of Odisha's Culture. We Curate Bespoke Trips That Delve Deep Into The Heart Of Odisha's Traditions, Cuisine, Lifestyle, And Festivals. From Savoring Authentic Odia Cuisine To Partaking In Colorful Local Festivals.
        </p>
      </div>

      {/* Stats Section */}
      <div className="statsSection">
        <div className="statsBackground">
          <div className="stats">
            <div className="stat">
              <h3>168k</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat">
              <h3>+45k</h3>
              <p>Destinations</p>
            </div>
            <div className="stat">
              <h3>+49</h3>
              <p>Global Branch</p>
            </div>
            <div className="stat">
              <h3>+26k</h3>
              <p>Campaigns</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Grid Section */}
      <div className="container my-5">
        <div className="row">
          {/* First Row */}
          <div className="col-6 col-md-3 p-1">
            <div className="image-item image1"></div>
          </div>
          <div className="col-6 col-md-3 p-1">
            <div className="image-item image2"></div>
          </div>
          <div className="col-6 col-md-3 p-1">
            <div className="image-item image3"></div>
          </div>
          <div className="col-6 col-md-3 p-1">
            <div className="image-item image4"></div>
          </div>

          {/* Second Row */}
          <div className="col-6 col-md-4 p-1">
            <div className="image-item image5"></div>
          </div>
          <div className="col-6 col-md-4 p-1">
            <div className="image-item image6"></div>
          </div>
          <div className="col-6 col-md-4 p-1">
            <div className="image-item image7"></div>
          </div>
        </div>
      </div>
      <div className="full-height-image"></div>
    </div>
  );
}

export default AboutUs;