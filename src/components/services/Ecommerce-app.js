import React from "react";

const EcommerceApp = () => {
  return (
    <>
     

      {/* Intro Section */}
      <section className="intro-section ecommercebackground" style={{ background: "url('../img/portfolio/ecom2.jpg') center/cover", color: "white" }}>
        <div className="container text-center d-flex flex-column justify-content-center" style={{ height: "60vh", position: "relative" }}>
          <div style={{ position: "relative", zIndex: 2 }}>
            <h1 className="display-4">Welcome to Our E-Commerce Platform</h1>
            <p className="lead">A role-based platform offering exclusive products with features for Admins and Users</p>
            <a href="#features" className="btn btn-primary btn-lg mt-3">Explore Features</a>
          </div>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.16)", zIndex: 1 }}></div>
        </div>
      </section>

      {/* Features Section */}
   {/* Features Section */}
<section id="features" className="features-section text-center py-5">
  <div className="container">
    <h2 className="display-4">Features</h2>
    <p className="lead">Explore the functionalities available for Admins and Users.</p>
    <div className="row">
      <div className="col-md-6 d-flex align-items-stretch">
        <div className="card shadow-lg w-100">
          <div className="card-body">
            <h3>Admin Features</h3>
            <ul>
              <li>Manage products, categories, and users</li>
              <li>Handle orders and profiles</li>
              <li>Email notifications for order status and password updates</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-6 d-flex align-items-stretch">
        <div className="card shadow-lg w-100">
          <div className="card-body">
            <h3>User Features</h3>
            <ul>
              <li>Register and log in to your account</li>
              <li>Place orders and track them</li>
              <li>Manage your profile and preferences</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


     {/* Technologies Section */}
<section className="tech-section text-center py-5 technologysection">
  <div className="container">
    <h2 className="display-4" style={{ color: "#28a745" }}>Technologies Used</h2>
    <div className="row justify-content-center">
      <div className="col-6 col-md-2 m-3">
        <div className="text-center">
          <img src="../img/portfolio/java22.jpg" alt="Java" style={{ width: "100px", height: "100px" }} />
          <div><strong>Java</strong></div>
        </div>
      </div>
      <div className="col-6 col-md-2 m-3">
        <div className="text-center">
          <img src="../img/portfolio/springbt2.png" alt="Spring Boot" style={{ width: "100px", height: "100px" }} />
          <div><strong>Spring Boot</strong></div>
        </div>
      </div>
      <div className="col-6 col-md-2 m-3">
        <div className="text-center">
          <img src="../img/portfolio/mysql22.png" alt="MySQL" style={{ width: "100px", height: "100px" }} />
          <div><strong>MySQL</strong></div>
        </div>
      </div>
      <div className="col-6 col-md-2 m-3">
        <div className="text-center">
          <img src="../img/portfolio/boot.jpg" alt="Bootstrap" style={{ width: "100px", height: "100px" }} />
          <div><strong>Bootstrap</strong></div>
        </div>
      </div>
    </div>
  </div>
</section>



    
    </>
  );
};

export default EcommerceApp;
