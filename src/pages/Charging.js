import React, { useEffect } from 'react';

function Charging() {
  // Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="tesla-charging-page">
      {/* Hero Section */}
      <section
        className="charging-hero"
        style={{
          backgroundImage: "url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Supercharger_Ecosystem_Hero_Desktop.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="charging-hero-content">
          <h1>Find Your Charge</h1>
          <p>Explore the global network of Superchargers and Destination Chargers.</p>
          <div className="charging-stats">
            <div className="stat-item">
              <span className="stat-number">55,000+</span>
              <span className="stat-label">Global Superchargers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Destination Chargers</span>
            </div>
          </div>
          <div className="hero-actions">
            <button
              className="tesla-btn tesla-btn-primary"
              onClick={() => document.querySelector('.charging-map').scrollIntoView({ behavior: 'smooth' })}
            >
              Find a Station
            </button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="charging-map scroll-reveal">
        <div className="map-container">
          <div className="map-placeholder">
            <div className="map-overlay">
              <div className="charging-marker supercharger" style={{ top: '30%', left: '20%' }}>
                <div className="marker-dot red"></div>
                <span>New York Supercharger</span>
              </div>
              <div className="charging-marker supercharger" style={{ top: '40%', left: '15%' }}>
                <div className="marker-dot red"></div>
                <span>Los Angeles Supercharger</span>
              </div>
              <div className="charging-marker destination" style={{ top: '25%', left: '70%' }}>
                <div className="marker-dot gray"></div>
                <span>London Destination</span>
              </div>
              <div className="charging-marker supercharger" style={{ top: '45%', left: '75%' }}>
                <div className="marker-dot red"></div>
                <span>Berlin Supercharger</span>
              </div>
              <div className="charging-marker destination" style={{ top: '60%', left: '85%' }}>
                <div className="marker-dot gray"></div>
                <span>Shanghai Destination</span>
              </div>
              <div className="charging-marker supercharger" style={{ top: '70%', left: '50%' }}>
                <div className="marker-dot red"></div>
                <span>Sydney Supercharger</span>
              </div>
            </div>
            <svg className="world-map" viewBox="0 0 1000 500">
              <path d="M150,100 Q200,80 250,100 T350,120 L400,140 Q450,160 500,140 T600,120 L650,100 Q700,80 750,100 T850,120"
                stroke="#e31937" strokeWidth="2" fill="none" opacity="0.3" />
              <path d="M100,200 Q150,180 200,200 T300,220 L350,240 Q400,260 450,240 T550,220 L600,200 Q650,180 700,200 T800,220"
                stroke="#e31937" strokeWidth="2" fill="none" opacity="0.3" />
              <path d="M200,300 Q250,280 300,300 T400,320 L450,340 Q500,360 550,340 T650,320 L700,300 Q750,280 800,300"
                stroke="#e31937" strokeWidth="2" fill="none" opacity="0.3" />
            </svg>
          </div>
        </div>
        <div className="map-actions">
          <button className="tesla-btn tesla-btn-primary">View Network</button>
          <button className="tesla-btn tesla-btn-secondary">Learn More</button>
        </div>
      </section>

      {/* Charging Types */}
      <section className="charging-types scroll-reveal">
        <div className="types-container">
          <h2>Charging Solutions</h2>
          <div className="charging-grid">
            <div className="charging-type-card">
              <h3>Supercharger</h3>
              <p className="charging-speed">Up to 250 kW</p>
              <p>The fastest charging experience. Perfect for long-distance travel with charging speeds up to 250 kW.</p>
              <ul>
                <li>15 minutes for 200 miles of range</li>
                <li>Available 24/7</li>
                <li>Global network</li>
                <li>Automatic billing</li>
              </ul>
            </div>
            <div className="charging-type-card">
              <h3>Destination Charging</h3>
              <p className="charging-speed">Up to 22 kW</p>
              <p>Convenient charging at hotels, restaurants, and shopping centers while you go about your day.</p>
              <ul>
                <li>Overnight charging</li>
                <li>Urban locations</li>
                <li>Hospitality partners</li>
                <li>Easy access</li>
              </ul>
            </div>
            <div className="charging-type-card">
              <h3>Home Charging</h3>
              <p className="charging-speed">Up to 11.5 kW</p>
              <p>Charge at home with Wall Connector for the most convenient and cost-effective charging experience.</p>
              <ul>
                <li>Charge overnight</li>
                <li>Lower electricity rates</li>
                <li>Weather protection</li>
                <li>Mobile app control</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Charging Benefits */}
      <section className="charging-benefits scroll-reveal">
        <div className="benefits-container">
          <h2>Why Tesla Charging?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon" style={{ WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 11.08V12a10 10 0 1 1-5.93-9.14'%3E%3C/path%3E%3Cpolyline points='22 4 12 14.01 9 11.01'%3E%3C/polyline%3E%3C/svg%3E\")" }}></div>
              <h3>Reliability</h3>
              <p>99.95% uptime with 24/7 monitoring and support</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon" style={{ WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'%3E%3C/polygon%3E%3C/svg%3E\")" }}></div>
              <h3>Speed</h3>
              <p>Industry-leading charging speeds get you back on the road faster</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon" style={{ WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'%3E%3C/path%3E%3Ccircle cx='12' cy='10' r='3'%3E%3C/circle%3E%3C/svg%3E\")" }}></div>
              <h3>Convenience</h3>
              <p>Seamless experience with automatic billing and mobile app integration</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon" style={{ WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'%3E%3C/path%3E%3Ccircle cx='12' cy='10' r='3'%3E%3C/circle%3E%3C/svg%3E\")" }}></div>
              <h3>Coverage</h3>
              <p>Extensive network covering major routes and destinations worldwide</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Charging;