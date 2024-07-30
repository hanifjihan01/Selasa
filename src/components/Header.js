import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar navbar-expand-lg navbar-light fixed-top ${scrolled ? 'bg-dark' : 'bg-transparent'}`}>
      <div className="container">
        <a className="navbar-brand text-white" href="#">Farrosindo</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link text-white" href="#about">Home</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#brands">Products</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#innovation">Services</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#csr">Project</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#career">News & Event</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#scholarship">About</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#news">Contact Us</a></li>
            <li className="nav-item">
              <button className="btn btn-outline-light">
                <img src="icon.jpg" alt="Search" style={{ height: '20px', width: '20px' }} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
