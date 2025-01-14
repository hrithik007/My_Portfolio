import React from 'react';

const ContactSection = () => {
  return (
    <div className="contact-container">
      <section id="contact" className="contact-section py-5">
        <div className="container">
          {/* Section Heading */}
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <h2 className="mb-4">Get in Touch</h2>
              <p className="lead">
                Have questions, suggestions, or just want to connect? Feel free to reach out using the form below, or email me directly at{' '}
                <a
                  href="mailto:hrithik.jais2013@gmail.com"
                  className="custom-email"
                >
                  <i className="fas fa-envelope mr-2"></i>hrithik.jais2013@gmail.com
                </a>. I look forward to hearing from you!
              </p>
            </div>
          </div>

          {/* Google Form Embed */}
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdDTEpkD7OTSZnJHDEQl-pBkr43tE9rQvAR5PIBq796lIIAbg/viewform?embedded=true"
                width="640"
                height="710"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Contact Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
