import React from 'react';

function Footer() {
  return (
    <footer className="text-white py-5" style={{ backgroundColor: '#000000', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">Tesla © 2023</h5>
            <p>Innovative electric vehicles for a sustainable future.</p>
            <div className="mt-3">
              <a href="#" className="text-white me-3"><i className="bi bi-facebook fs-5"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-twitter fs-5"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-instagram fs-5"></i></a>
              <a href="#" className="text-white"><i className="bi bi-youtube fs-5"></i></a>
            </div>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Model S</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Model 3</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Model X</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Model Y</a></li>
              <li><a href="#" className="text-white text-decoration-none">Cybertruck</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3">Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><i className="bi bi-geo-alt me-2"></i> 123 Innovation Drive, Palo Alto, CA</li>
              <li className="mb-2"><i className="bi bi-envelope me-2"></i> info@tesla.com</li>
              <li><i className="bi bi-telephone me-2"></i> +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <hr className="my-4 bg-secondary" />
        <div className="text-center py-3">
          <p className="mb-0">© 2023 Tesla, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
