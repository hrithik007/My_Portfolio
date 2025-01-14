import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    // First navigate to the homepage
    navigate('/');
    // Then, scroll to the About Me section after the page loads
    setTimeout(() => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); // Wait a moment for the page to load
  };


  const handleContactClick = () => {
    // First navigate to the homepage
    navigate('/');
    // Then, scroll to the About Me section after the page loads
    setTimeout(() => {
      const aboutSection = document.getElementById('contact');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); // Wait a moment for the page to load
  };

  const handleProjectClick = () => {
    // First navigate to the homepage
    navigate('/');
    // Then, scroll to the About Me section after the page loads
    setTimeout(() => {
      const aboutSection = document.getElementById('projects');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); // Wait a moment for the page to load
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Hrithik Jaiswal</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#about" onClick={handleAboutClick}>About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={handleProjectClick}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={handleContactClick}>Contact</a>
            </li>
            <li className="nav-item dropdown text-white">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Services
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/Ecommerce-app">E-Commerce App</Link>
                <a className="dropdown-item" href="#portfolio">Portfolio Website</a>
                <a className="dropdown-item" href="#construction">Construction Website</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#other">Other Services</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
