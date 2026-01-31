import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you can add logic to send data to the server
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-5">
      <div className="container text-center mb-5">
        <h2 className="display-5 fw-bold mb-4">Contact Tesla</h2>
        <p className="lead">Get in touch with our team for more information</p>
      </div>

      {/* Contact Form Section */}
      <div className="mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="fw-bold mb-4 text-center">Send us a Message</h3>
                  <form onSubmit={handleSubmit}>
                    {submitStatus === 'success' && (
                      <div className="alert alert-success mb-4" role="alert">
                        <i className="bi bi-check-circle-fill me-2"></i>
                        Thank you for contacting us! We will respond to you as soon as possible.
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="alert alert-danger mb-4" role="alert">
                        <i className="bi bi-exclamation-triangle-fill me-2"></i>
                        There was an error sending your message. Please try again.
                      </div>
                    )}

                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name *</label>
                      <input
                        type="text"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <div className="invalid-feedback">
                          {errors.name}
                        </div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email *</label>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <div className="invalid-feedback">
                          {errors.email}
                        </div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">Phone</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number (optional)"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message *</label>
                      <textarea
                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                      {errors.message && (
                        <div className="invalid-feedback">
                          {errors.message}
                        </div>
                      )}
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg px-4"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send me-2"></i>
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="mb-5 bg-light text-dark py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-geo-alt-fill text-primary fs-1"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Visit Us</h4>
                  <p className="mb-0">123 Innovation Drive<br />Palo Alto, CA 94301</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-telephone-fill text-primary fs-1"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Call Us</h4>
                  <p className="mb-0">+1 (555) 123-4567<br />Mon-Fri: 9AM-6PM</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-envelope-fill text-primary fs-1"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Email Us</h4>
                  <p className="mb-0">info@tesla.com<br />support@tesla.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Find a Dealer Section */}
      <div className="mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">Find a Tesla</h1>
              <p className="lead mb-4">Experience our vehicles in person at a Tesla location near you.</p>
              <p>Our stores are designed to be welcoming and educational spaces where you can learn more about our products and even take a test drive.</p>
              <button className="btn btn-primary btn-lg">Find a Tesla</button>
            </div>
            <div className="col-lg-6">
              <img src="https://www.tesla.com/sites/tesla/files/find-a-tesla.jpg?202211170905" className="img-fluid rounded shadow" alt="Tesla Store" />
            </div>
          </div>
        </div>
      </div>

      {/* Service Centers Section */}
      <div className="mb-5 bg-light text-dark py-5">
        <div className="container">
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src="https://www.tesla.com/sites/tesla/files/service-center.jpg?202211170905" className="img-fluid rounded shadow" alt="Tesla Service Center" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Service Centers</h1>
              <p className="lead mb-4">Our service centers are staffed with highly trained technicians who know your vehicle inside and out.</p>
              <p>With locations around the world, we're always here to help keep your Tesla running at its best.</p>
              <button className="btn btn-primary btn-lg">Find a Service Center</button>
            </div>
          </div>
        </div>
      </div>

      {/* Charging Network Section */}
      <div className="mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">Charging Network</h1>
              <p className="lead mb-4">Access our global network of Superchargers and Destination Chargers.</p>
              <p>With thousands of charging stations worldwide, you can easily plan your next road trip with confidence.</p>
              <button className="btn btn-primary btn-lg">View Charging Map</button>
            </div>
            <div className="col-lg-6">
              <img src="https://www.tesla.com/sites/tesla/files/charging-network.jpg?202211170905" className="img-fluid rounded shadow" alt="Tesla Charging Network" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
