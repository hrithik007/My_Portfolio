import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import About from './components/AboutUs';
import Projects from './components/Project';
import Footer from './components/Footer';
import ContactSection from './components/contactUs';
import EcommerceApp from './components/services/Ecommerce-app';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Ecommerce-app" element={<EcommerceApp />} />
        </Routes>

        {/* Render only other components if we're not on the EcommerceApp route */}
        <Routes>
          <Route
            path="/My_Portfolio"
            element={
              <>
                <Hero />
                <About />
                <Projects />
                <ContactSection />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
