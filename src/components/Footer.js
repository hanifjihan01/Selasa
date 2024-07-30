import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <p>&copy; 2024 My Website</p>
      <div className="footer-links">
        <a href="https://facebook.com" className="text-white mx-2">Facebook</a>
        <a href="https://twitter.com" className="text-white mx-2">Twitter</a>
        <a href="https://instagram.com" className="text-white mx-2">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;
