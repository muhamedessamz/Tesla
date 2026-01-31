import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMenuToggle = () => {
      const mobileMenu = document.getElementById('tesla-mobile-menu');
      if (mobileMenu) {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    };

    const handleMenuClose = () => {
      const mobileMenu = document.getElementById('tesla-mobile-menu');
      if (mobileMenu) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Add event listeners for non-React managed elements
    const menuBtn = document.getElementById('tesla-menu-btn');
    const closeBtn = document.getElementById('tesla-mobile-close');
    const mobileMenu = document.getElementById('tesla-mobile-menu');

    if (menuBtn) menuBtn.addEventListener('click', handleMenuToggle);
    if (closeBtn) closeBtn.addEventListener('click', handleMenuClose);
    if (mobileMenu) {
      mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) handleMenuClose();
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (menuBtn) menuBtn.removeEventListener('click', handleMenuToggle);
      if (closeBtn) closeBtn.removeEventListener('click', handleMenuClose);
    };
  }, []);

  // Close responsive menu on mobile devices
  const closeMenu = () => {
    const mobileMenu = document.getElementById('tesla-mobile-menu');
    if (mobileMenu && mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <nav className={`tesla-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="tesla-nav-container">
        {/* Tesla Logo */}
        <div className="tesla-logo">
          <Link to="/" onClick={closeMenu}>
            <svg className="tesla-logo-svg" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H238.6V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7-7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor" />
            </svg>
          </Link>
        </div>

        {/* Desktop Navigation - Simplified like Tesla */}
        <div className="tesla-nav-center">
          <Link to="/vehicles" className="tesla-nav-link" onClick={closeMenu}>
            Vehicles
          </Link>
          <Link to="/energy" className="tesla-nav-link" onClick={closeMenu}>
            Energy
          </Link>
          <Link to="/charging" className="tesla-nav-link" onClick={closeMenu}>
            Charging
          </Link>
          <Link to="/discover" className="tesla-nav-link" onClick={closeMenu}>
            Discover
          </Link>
          <Link to="/shop" className="tesla-nav-link" onClick={closeMenu}>
            Shop
          </Link>
        </div>

        {/* Right Side Menu */}
        <div className="tesla-nav-right">
          <Link to="/support" className="tesla-nav-link tesla-nav-support">
            Support
          </Link>
          <Link to="/login" className="tesla-nav-link tesla-nav-account">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <a href="#" className="tesla-nav-link tesla-nav-globe">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path d="M2 12H22" stroke="currentColor" strokeWidth="2" />
              <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2" />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Overlay */}
        <div className="tesla-mobile-menu" id="tesla-mobile-menu">
          <div className="tesla-mobile-menu-content">
            <button className="tesla-mobile-close" id="tesla-mobile-close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="tesla-mobile-links">
              <Link to="/vehicles" onClick={closeMenu}>Vehicles</Link>
              <Link to="/energy" onClick={closeMenu}>Energy</Link>
              <Link to="/charging" onClick={closeMenu}>Charging</Link>
              <Link to="/discover" onClick={closeMenu}>Discover</Link>
              <Link to="/shop" onClick={closeMenu}>Shop</Link>
              <hr />
              <Link to="/support" onClick={closeMenu}>Support</Link>
              <Link to="/account" onClick={closeMenu}>Account</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;