import React from 'react';

function Navbar({ setCurrentPage, currentPage }) {
  const handleNavClick = (page) => {
    setCurrentPage(page);
    // إغلاق القائمة المتجاوبة على الأجهزة المحمولة
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top" style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Tesla</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a 
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`} 
                aria-current="page" 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentPage === 'models' ? 'active' : ''}`} 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleNavClick('models'); }}
              >
                Models
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentPage === 'about' ? 'active' : ''}`} 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`} 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;