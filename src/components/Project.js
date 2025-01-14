import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="container text-center my-5">
      <h2>My Projects</h2>
      <div className="card-deck">

        <div className="card">
          <div className="project-img ecommerce-app"></div>
          <div className="card-body">
            <h5 className="card-title">E-Commerce App</h5>
            <p className="card-text">A fully functional e-commerce application.</p>
            <a href="http://lex-cart.us-east-2.elasticbeanstalk.com/" className="btn btn-primary">View Demo</a>
            <a href="https://github.com/hrithik007/Ecommerce-App-Using-Java-SpringBoot" className="btn btn-secondary">GitHub</a>
          </div>
        </div>

        <div className="card">
          <div className="project-img construction-website"></div>
          <div className="card-body">
            <h5 className="card-title">Construction Website</h5>
            <p className="card-text">
              A modern, user-friendly website for a construction company, showcasing their projects and services.
            </p>
            <a href="https://hrithik007.github.io/Web-Template-1/" className="btn btn-primary">View Demo</a>
            <a href="#" className="btn btn-secondary">GitHub</a>
          </div>
        </div>

        <div className="card">
          <div className="project-img interior-designer"></div>
          <div className="card-body">
            <h5 className="card-title">Interior Designer Website</h5>
            <p className="card-text">
              A modern, user-friendly website for an interior designer company, showcasing their projects and services.
            </p>
            <a href="https://hrithik007.github.io/Interior-Website/" className="btn btn-primary">View Demo</a>
            <a href="#" className="btn btn-secondary">GitHub</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
