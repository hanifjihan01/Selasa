// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider';
import Testimonials from './components/Testimonials'; // Import Testimonials

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ImageSlider />
      <div className="container">
        <section id="brands" className="py-5">
          <h2>About Us</h2>
          <p>CITI PUMP is a Rental and Sales Services Company for Heavy Concrete Building Construction Equipment...</p>
        </section>
        <section id="innovation" className="py-5">
          <h2>Product & Services</h2>
          <p>Specializing in Concrete Pump, We Rent and Sell Concrete Pump Equipment and Spareparts...</p>
        </section>
        <section id="csr" className="py-5">
          <h2>Project</h2>
          <p>Details about our CSR activities...</p>
        </section>
        <section id="career" className="py-5">
          <h2>News and Event</h2>
          <p>Details about career opportunities...</p>
        </section>
        <section id="scholarship" className="py-5">
          <h2>Contact Us</h2>
          <p>Details about our scholarship programs...</p>
        </section>
        <section id="news" className="py-5">
          <h2>News</h2>
          <p>Latest news...</p>
        </section>
      </div>
      <Services />
      <Testimonials /> {/* Add Testimonials */}
      <Footer />
    </div>
  );
}

export default App;
