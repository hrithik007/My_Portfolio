import React from "react";

const EcommerceApp = () => {
  return (
    <>
     

      {/* Intro Section */}
      <section className="intro-section ecommercebackground" >
        <div className="container text-center d-flex flex-column justify-content-center" style={{ height: "65vh", position: "relative" }}>
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
    <p className="lead">
      Explore the powerful features offered by our eCommerce platform, designed to enhance both Admin and User experiences.
    </p>
    <div className="row">
      <div className="col-md-6 d-flex align-items-stretch">
        <div className="card shadow-lg w-100">
          <div className="card-body">
            <h3>Admin Features</h3>
            <ul>
              <li>Efficiently manage products, categories, and users (activate, inactivate users)</li>
              <li>Handle orders and user profiles with ease</li>
              <li>Send automated email notifications for order status updates and password changes</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-6 d-flex align-items-stretch">
        <div className="card shadow-lg w-100">
          <div className="card-body">
            <h3>User Features</h3>
            <ul>
              <li>Securely register and log in to your account</li>
              <li>Easily place orders and track their status</li>
              <li>Receive email updates on the status of your orders, including:
                <ul>
                  <li>In Progress</li>
                  <li>Order Received</li>
                  <li>Product Packed</li>
                  <li>Out for Delivery</li>
                  <li>Delivered</li>
                  <li>Cancelled</li>
                  <li>Success</li>
                </ul>
              </li>
              <li>Manage your profile and preferences with ease</li>
              <li>Utilize the "Forgot Password" functionality for hassle-free account recovery</li>
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
          <div className="tech-card java"></div>
          <div><strong>Java</strong></div>
        </div>
      </div>
      <div className="col-6 col-md-2 m-3">
        <div className="text-center">
          <div className="tech-card springboot"></div>
          <div><strong>Spring Boot</strong></div>
        </div>
      </div>
      <div className="col-6 col-md-2 m-3">
        <div className="text-center">
          <div className="tech-card mysql"></div>
          <div><strong>MySQL</strong></div>
        </div>
      </div>
      <div className="col-6 col-md-2 m-3">
        <div className="text-center">
          <div className="tech-card bootstrap"></div>
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
