import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true); // Track the state of the navbar

  const handleNavbarToggle = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed); // Toggle the collapse state
  };

  const handleAboutClick = () => {
    navigate('/');
    setTimeout(() => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  const handleProjectClick = () => {
    navigate('/');
    setTimeout(() => {
      const projectSection = document.getElementById('projects');
      if (projectSection) {
        projectSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Hrithik Jaiswal
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavbarToggle} // Toggle the navbar on button click
          aria-controls="navbarNav"
          aria-expanded={!isNavbarCollapsed ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`} // Conditionally apply 'show' class
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <a className="nav-link" href="#about" onClick={handleAboutClick}>
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={handleProjectClick}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={handleContactClick}>
                Contact
              </a>
            </li>
            <li className="nav-item dropdown text-white">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/Ecommerce-app">
                    E-Commerce App
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#portfolio">
                    Portfolio Website
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#construction">
                    Construction Website
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#other">
                    Other Services
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
