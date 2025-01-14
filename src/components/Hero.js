import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero text-black text-center py-5">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 text-left text-white">
            <h1 className="display-4">Hi, I'm Hrithik Jaiswal</h1>
            <p className="lead">
              I have 2.6 years of experience in Web Development, now collaborating with startups across the US, Canada, and UK, designing and developing beautiful web experiences.
            </p>
            <a href="#about" className="btn btn-light btn-lg mt-3">Learn More About Me</a>
            <br />
            <a href="https://drive.google.com/file/d/19l9rSwdzBR2pTahAyyjUAOZ5VcyNB2UW/view?usp=sharing" className="btn btn-outline-light btn-lg mt-3 btn-primary" download>Download CV/Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
