import React from "react";

const EcommerceApp = () => {
  return (
    <>
     
      {/* Features Section */}
      <section className="intro-section ecommercebackground">
  <div className="container text-center d-flex flex-column justify-content-center" style={{ height: "65vh", position: "relative" }}>
    <div style={{ position: "relative", zIndex: 2 }}>
      <h1 className="display-4">Welcome to Our E-Commerce Platform</h1>
      <p className="lead">A role-based platform offering exclusive products with features for Admins and Users</p>
      <a href="#features" className="btn btn-primary btn-lg mt-3">Explore Features</a>
    </div>
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.16)", zIndex: 1 }}></div>
  </div>

 
  <section id="features" className="features-section text-center py-5">
    <div className="container">
      <h2 className="display-4">Features</h2>
      <p className="lead">Explore the powerful functionalities available for Admins and Users.</p>
      
      <div className="row">
      
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="card shadow-lg w-100">
            <div className="card-body">
              <h3 style={{ color: 'blue' }}>
                <i className="fas fa-user-shield mr-2"></i> Admin Features
              </h3>
              <ul>
                <li>Manage products, categories, and users (activate, inactivate users)</li>
                <li>Efficiently handle orders and user profiles</li>
                <li>Send automated email notifications for order status updates and password changes</li>
              </ul>
            </div>
          </div>
        </div>
        
   
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="card shadow-lg w-100">
            <div className="card-body">
              <h3 style={{ color: 'green' }}>
                <i className="fas fa-user mr-2"></i> User Features
              </h3>
              <ul>
                <li>Register and log in to your account securely</li>
                <li>Place orders and track their status with ease</li>
                <li>Receive email updates on the status of your orders</li>
                <li>Manage your profile and preferences</li>
                <li>Utilize the "Forgot Password" functionality for hassle-free account recovery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="admin-dashboard-section py-5">
  <div className="container text-center">
    <h2 className="display-4">Admin Dashboard</h2>
    <p className="lead">Access the powerful Admin Dashboard with full control over platform functionalities.</p>
    
    <div className="admin-dashboard-image"></div>

    <p className="mt-4">Manage products, categories, users, and more through the comprehensive Admin Dashboard.</p>
  </div>
</section>

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
