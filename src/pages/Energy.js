import React, { useEffect } from 'react';

function Energy() {
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
    <div className="tesla-energy-page">
      {/* Hero Section */}
      <section
        className="energy-hero"
        style={{
          backgroundImage: "url('https://img-va.myshopline.com/image/store/1647740624060/How-the-Tesla-Energy-Ecosystem-is-Creating-the-Grid-of-the-Future.jpeg?w=2560&h=1928')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="energy-hero-content">
          <h1>Tesla Energy</h1>
          <p>Clean energy for your home and business</p>
        </div>
      </section>

      {/* Scrollable Energy Products */}
      <section className="energy-products-scroll scroll-reveal">
        <div className="energy-scroll-container">
          <h2>Our Energy Solutions</h2>
          <div className="energy-scroll-wrapper">

            {/* Solar Panels */}
            <div className="energy-product-card">
              <div className="energy-product-image">
                <img src="/images/Homepage-Card-Solar-Panels-Desktop.jpg" alt="Solar Panels" />
              </div>
              <div className="energy-product-content">
                <h3>Solar Panels</h3>
                <p className="energy-price">Lowest Cost Solar Panels in America</p>
                <p className="energy-description">
                  Convert sunlight to electricity with our high-efficiency solar panels.
                  Designed to withstand extreme weather conditions while maximizing energy production.
                </p>
                <ul className="energy-features">
                  <li>25-year warranty</li>
                  <li>High efficiency rating</li>
                  <li>Weather resistant</li>
                  <li>Easy installation</li>
                </ul>
                <div className="energy-buttons">
                  <button className="tesla-btn tesla-btn-primary">Order Now</button>
                  <button className="tesla-btn tesla-btn-secondary">Learn More</button>
                </div>
              </div>
            </div>

            {/* Solar Roof */}
            <div className="energy-product-card">
              <div className="energy-product-image">
                <img src="/images/Homepage-Card-Solar-Roof-Desktop.jpg" alt="Solar Roof" />
              </div>
              <div className="energy-product-content">
                <h3>Solar Roof</h3>
                <p className="energy-price">Produce Clean Energy From Your Roof</p>
                <p className="energy-description">
                  Beautiful solar roof tiles that generate electricity while protecting your home.
                  Engineered to last decades with superior durability.
                </p>
                <ul className="energy-features">
                  <li>Integrated solar tiles</li>
                  <li>Weather protection</li>
                  <li>Aesthetic design</li>
                  <li>Long-term durability</li>
                </ul>
                <div className="energy-buttons">
                  <button className="tesla-btn tesla-btn-primary">Order Now</button>
                  <button className="tesla-btn tesla-btn-secondary">Learn More</button>
                </div>
              </div>
            </div>

            {/* Powerwall */}
            <div className="energy-product-card">
              <div className="energy-product-image">
                <img src="/images/Homepage-Card-Megapack-Desktop.jpg" alt="Powerwall" />
              </div>
              <div className="energy-product-content">
                <h3>Powerwall</h3>
                <p className="energy-price">Store Your Energy For Later Use</p>
                <p className="energy-description">
                  Home battery that stores energy from solar or the grid.
                  Provides backup power and helps reduce electricity costs.
                </p>
                <ul className="energy-features">
                  <li>13.5 kWh capacity</li>
                  <li>Backup power protection</li>
                  <li>Mobile app control</li>
                  <li>Scalable system</li>
                </ul>
                <div className="energy-buttons">
                  <button className="tesla-btn tesla-btn-primary">Order Now</button>
                  <button className="tesla-btn tesla-btn-secondary">Learn More</button>
                </div>
              </div>
            </div>

            {/* Megapack */}
            <div className="energy-product-card">
              <div className="energy-product-image">
                <img src="/images/Homepage-Card-Megapack-Desktop.jpg" alt="Megapack" />
              </div>
              <div className="energy-product-content">
                <h3>Megapack</h3>
                <p className="energy-price">Utility-Scale Energy Storage</p>
                <p className="energy-description">
                  Massive energy storage system for utilities and large commercial projects.
                  Helps stabilize the grid and store renewable energy at scale.
                </p>
                <ul className="energy-features">
                  <li>3+ MWh capacity</li>
                  <li>Grid-scale deployment</li>
                  <li>Advanced software</li>
                  <li>Rapid installation</li>
                </ul>
                <div className="energy-buttons">
                  <button className="tesla-btn tesla-btn-primary">Contact Sales</button>
                  <button className="tesla-btn tesla-btn-secondary">Learn More</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Energy Benefits Section */}
      <section className="energy-benefits scroll-reveal">
        <div className="benefits-container">
          <h2>Why Choose Tesla Energy?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon" style={{ WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='1' x2='12' y2='23'%3E%3C/line%3E%3Cpath d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'%3E%3C/path%3E%3C/svg%3E\")" }}></div>
              <h3>Cost Savings</h3>
              <p>Reduce your electricity bills with clean, renewable energy</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon" style={{ WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'%3E%3C/path%3E%3Cpolyline points='9 22 9 12 15 12 15 22'%3E%3C/polyline%3E%3C/svg%3E\")" }}></div>
              <h3>Energy Independence</h3>
              <p>Generate and store your own power for complete energy autonomy</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon" style={{ WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/xml' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 21 2c-2 4-2.5 5.5-1.1 11.2A7 7 0 0 1 11 20z'%3E%3C/path%3E%3Cpath d='M11 13a4 4 0 1 0-4-4'%3E%3C/path%3E%3C/svg%3E\")" }}></div>
              <h3>Environmental Impact</h3>
              <p>Reduce your carbon footprint with sustainable energy solutions</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon" style={{ WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='2' y='7' width='20' height='14' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='6' y1='7' x2='6' y2='3'%3E%3C/line%3E%3Cline x1='18' y1='7' x2='18' y2='3'%3E%3C/line%3E%3C/svg%3E\")" }}></div>
              <h3>Reliability</h3>
              <p>Backup power ensures your home stays powered during outages</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Energy;