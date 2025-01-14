import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="container text-center my-5">
      <h2>My Projects</h2>
      <div className="card-deck">
       
        <div className="card">
          <img src="img/" className="card-img-top" alt="E-Commerce App" />
          <div className="card-body">
            <h5 className="card-title">E-Commerce App</h5>
            <p className="card-text">A fully functional e-commerce application.</p>
            <a href="#" className="btn btn-primary">View Demo</a>
            <a href="#" className="btn btn-secondary">GitHub</a>
          </div>
        </div>
        <div className="card">
          <img src="/img/portfolio/Construction1.png" className="card-img-top" alt="Construction Website" />
          <div className="card-body">
            <h5 className="card-title">Construction Website</h5>
            <p className="card-text">A modern, user-friendly website for a construction company, showcasing their projects and services.</p>
            <a href="https://hrithik007.github.io/Web-Template-1/" className="btn btn-primary">View Demo</a>
            <a href="#" className="btn btn-secondary">GitHub</a>
          </div>
        </div>

        <div className="card">
          <img src="/img/portfolio/interior1.png" className="card-img-top" alt="Interior Designer Website" />
          <div className="card-body">
            <h5 className="card-title">Interior Designer Website</h5>
            <p className="card-text">A modern, user-friendly website for an interior designer company, showcasing their projects and services.</p>
            <a href="https://hrithik007.github.io/Interior-Website/" className="btn btn-primary">View Demo</a>
            <a href="#" className="btn btn-secondary">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
