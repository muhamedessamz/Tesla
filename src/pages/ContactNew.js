import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكن إضافة منطق إرسال البيانات إلى الخادم
    alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.');
    setFormData({ name: '', email: '', phone: '', message: '' });
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
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
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
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea 
                        className="form-control" 
                        id="message" 
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary btn-lg px-4">Send Message</button>
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
              <img src="https://via.placeholder.com/800x500" className="img-fluid rounded shadow" alt="Tesla Store" />
            </div>
          </div>
        </div>
      </div>

      {/* Service Centers Section */}
      <div className="mb-5 bg-light text-dark py-5">
        <div className="container">
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src="https://via.placeholder.com/800x500" className="img-fluid rounded shadow" alt="Tesla Service Center" />
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
    </div>
  );
}

export default Contact;
