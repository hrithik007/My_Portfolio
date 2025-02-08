import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero text-black text-center py-5">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 text-left text-white">
            <h1 className="display-4">Hi, I'm Hrithik Jaiswal</h1>
            <p className="lead">
            Experienced software engineer with 2.7 years of expertise in Java, Spring Framework, React, and MySQL. Skilled in client
            communication, team collaboration, problem-solving, and Agile methodologies for efficient software delivery.   </p>
            <a href="#about" className="btn btn-light btn-lg mt-3">Learn More About Me</a>
            <br />
            <a href="https://drive.google.com/file/d/1ZEYRKIqG-xYIxRWN7Hup5jYkgDEAXBck/view?usp=sharing" className="btn btn-outline-light btn-lg mt-3 btn-primary" download>Download CV/Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
