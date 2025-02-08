import React from 'react';

const About = () => {
  return (
    <section id="about" className="container my-5">
      {/* About Section */}
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="about-img"></div>
        </div>
        <div className="col-md-6">
          <section>
            <h1>Experienced Software Engineer</h1>
            <p>
              Experienced software engineer with 2.7 years of expertise in Java, Spring Framework, React, and MySQL.
              Skilled in client communication, team collaboration, problem-solving, and Agile methodologies for efficient
              software delivery.
            </p>

            <h2>About Me</h2>
            <p>
              Hi, I'm <strong>Hrithik Jaiswal</strong>, a skilled software engineer specializing in <strong>Java</strong> and backend
              development. With over 2.7 years of experience, I’ve built scalable web applications using <strong>Spring Boot</strong>,{' '}
              <strong>SQL</strong>, and modern web technologies.
            </p>
          </section>
        </div>
      </div>

   

      {/* Technical Skills Section */}
      <div className="row mt-5">
        <div className="col">
          <h3 className="text-center mb-4">Technical Skills</h3>
          <div className="skills-box p-3 border rounded bg-light">
            <h4 className="pb-2">Tools</h4>
            <div className="d-flex flex-wrap justify-content-center">
              <span className="badge bg-primary text-white m-2"><i className="fas fa-tools"></i> Maven</span>
              <span className="badge bg-primary text-white m-2"><i className="fas fa-cogs"></i> Eclipse</span>
              <span className="badge bg-primary text-white m-2"><i className="fab fa-vscode"></i> VSCode</span>
              <span className="badge bg-primary text-white m-2 "><i className="fas fa-laptop-code"></i> IntelliJ</span>
           
            </div>
            <div className='border-bottom mb-2'></div>
            
            <h4 className="pb-2">Programming Languages</h4>
            <div className="d-flex flex-wrap justify-content-center">
              <span className="badge bg-primary text-white m-2"><i className="fab fa-java"></i> Java (Java 17)</span>
              <span className="badge bg-primary text-white m-2"><i className="fab fa-python"></i> Python</span>
              <span className="badge bg-primary text-white m-2"><i className="fab fa-js"></i> JavaScript</span>
              <span className="badge bg-primary text-white m-2"><i className="fab fa-cuttlefish"></i> C++</span>
            </div>
            <div className='border-bottom mb-2'></div>
            <h4 className="pb-2 ">Frameworks & Libraries</h4>
            <div className="d-flex flex-wrap justify-content-center">
              <span className="badge bg-primary text-white m-2"><i className="fab fa-spring"></i> Spring</span>
              <span className="badge bg-primary text-white m-2"><i className="fab fa-node"></i> NodeJS</span>
              <span className="badge bg-primary text-white m-2"><i className="fab fa-react"></i> React</span>
              <span className="badge bg-primary text-white m-2"><i className="fab fa-java"></i> Spring Boot</span>
            </div>
            <div className='border-bottom mb-2'></div>
            <h4 className="pb-2 ">Databases</h4>
            <div className="d-flex flex-wrap justify-content-center">
              <span className="badge bg-primary text-white m-2"><i className="fas fa-database"></i> MySQL</span>
              <span className="badge bg-primary text-white m-2"><i className="fas fa-database"></i> MongoDB</span>
              <span className="badge bg-primary text-white m-2"><i className="fas fa-database"></i> H2 Database</span>
            </div>
            <div className='border-bottom mb-2'></div>
            <h4 className="pb-2 ">Testing Tools</h4>
            <div className="d-flex flex-wrap justify-content-center">
              <span className="badge bg-primary text-white m-2"><i className="fas fa-cogs"></i> JUnit</span>
              <span className="badge bg-primary text-white m-2"><i className="fas fa-cogs"></i> Mockito</span>
            </div>
            <div className='border-bottom mb-2'></div>
            <h4 className="pb-2 ">DevOps & Cloud</h4>
            <div className="d-flex flex-wrap justify-content-center">
              <span className="badge bg-primary text-white m-2"><i className="fab fa-aws"></i> AWS</span>
              <span className="badge bg-primary text-white m-2"><i className="fab fa-microsoft"></i> Azure DevOps</span>
              <span className="badge bg-primary text-white m-2"><i className="fab fa-github"></i> GitHub Actions</span>
            </div>
            <div className='border-bottom mb-2'></div>
            <h4 className="pb-2 ">Data Visualization & Search</h4>
            <div className="d-flex flex-wrap justify-content-center">
              <span className="badge bg-primary text-white m-2"><i className="fas fa-search"></i> Kibana</span>
              <span className="badge bg-primary text-white m-2"><i className="fas fa-search"></i> Elasticsearch</span>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="row mt-5">
        <div className="col">
          <h3 className="text-center mb-4">Education</h3>
          <p className="text-center">
            <strong>Siliguri Institute of Technology</strong> | B.Tech in Computer Science and Engineering | CGPA: 8.76/10 (2018 – 2022)
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
