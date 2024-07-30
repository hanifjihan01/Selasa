import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeroSection() {
  return (
    <div className="jumbotron jumbotron-fluid text-white d-flex align-items-center" style={{ backgroundImage: "url('homefp.jpg')", backgroundSize: 'cover', height: '100vh', marginTop: '56px' }}>
      <div className="container text-center">
        <h1 className="display-4">Welcome to Farrasindo</h1>
        <p className="lead">Your trusted partner in construction equipment solutions.</p>
        <button className="btn btn-primary btn-lg">Learn More</button>
      </div>
    </div>
  );
}

export default HeroSection;
