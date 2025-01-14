import React from 'react';

const About = () => {
  return (
    <section id="about" className="container my-5">
      {/* About Section */}
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src="img/about-us.png" className="img-fluid" alt="About Me" />
        </div>
        <div className="col-md-6">
          <h2>About Me</h2>
          <p>
            Hi, I'm <strong>Hrithik Jaiswal</strong>, a skilled software engineer specializing in <strong>Java</strong> and backend development. With over 2.6 years of experience, I’ve built scalable web applications using <strong>Spring Boot</strong>, <strong>SQL</strong>, and modern web technologies.
          </p>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="row mt-5">
        <div className="col">
          <h3 className="text-center mb-4">Technical Skills</h3>
          <div className="skills-box p-3 border rounded bg-light">
            <ul className="list-inline text-center">
              <li className="list-inline-item badge bg-primary text-white p-2 m-1">Java</li>
              <li className="list-inline-item badge bg-primary text-white p-2 m-1">Spring Boot</li>
              <li className="list-inline-item badge bg-primary text-white p-2 m-1">JUnit</li>
              <li className="list-inline-item badge bg-primary text-white p-2 m-1">Mockito</li>
              <li className="list-inline-item badge bg-primary text-white p-2 m-1">H2 DB</li>
              <li className="list-inline-item badge bg-primary text-white p-2 m-1">MySQL</li>
              <li className="list-inline-item badge bg-primary text-white p-2 m-1">React</li>
              <li className="list-inline-item badge bg-primary text-white p-2 m-1">MongoDB</li>
              <li className="list-inline-item badge bg-primary text-white p-2 m-1">Git</li>
              <li className="list-inline-item badge bg-primary text-white p-2 m-1">Bootstrap</li>
              <li className="list-inline-item badge bg-primary text-white p-2 m-1">Thymeleaf</li>
              <li className="list-inline-item badge bg-primary text-white p-2 m-1">SQL</li>
              <li className="list-inline-item badge bg-primary text-white p-2 m-1">Node.js</li>
              <li className="list-inline-item badge bg-primary text-white p-2 m-1">Python</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
