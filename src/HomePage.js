// HomePage.js
import React from 'react';
import Header from './components/Header';
import AboutUs from './components/About';
import Services from './components/Services';
import HowWeWork from './components/HowWeWork';
import Packages from './components/Packages';
import Footer from './components/Footer';
import './App.css';

const HomePage = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <Services />
      <HowWeWork />
      <Packages />
      <Footer />
    </>
  );
};

export default HomePage;