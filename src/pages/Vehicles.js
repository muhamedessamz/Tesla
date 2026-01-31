import React, { useEffect } from 'react';

function Vehicles({ setCurrentPage }) {
  // Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            // Optimization: Stop observing once revealed
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleCarClick = (carPage) => {
    setCurrentPage(carPage);
  };

  return (
    <div className="tesla-vehicles-page">
      {/* Hero Section */}
      <section
        className="vehicles-hero"
        style={{
          backgroundImage: "url('https://helios-i.mashable.com/imagery/articles/00H5ReHPp7hohCY6k6pcOlk/hero-image.fill.size_1248x702.v1749809447.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="vehicles-hero-content">
          <h1>Tesla Vehicles</h1>
          <p>The safest, most capable vehicles ever built</p>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="vehicles-grid-section scroll-reveal">
        <div className="vehicles-container">
          <div className="vehicles-grid">

            {/* Model 3 */}
            <div className="vehicle-card" onClick={() => handleCarClick('model3')}>
              <div className="vehicle-image">
                <img src="/images/Homepage-Card-Model-3-Desktop.jpg" alt="Model 3" />
              </div>
              <div className="vehicle-content">
                <h3>Model 3</h3>
                <p className="vehicle-price">From $38,990</p>
                <p className="vehicle-description">The most affordable Tesla with impressive range and performance</p>
                <div className="vehicle-specs">
                  <span>358 mi range</span>
                  <span>3.1s 0-60 mph</span>
                  <span>162 mph top speed</span>
                </div>
                <div className="vehicle-buttons">
                  <button className="tesla-btn tesla-btn-primary">Order Now</button>
                  <button className="tesla-btn tesla-btn-secondary">Learn More</button>
                </div>
              </div>
            </div>

            {/* Model Y */}
            <div className="vehicle-card" onClick={() => handleCarClick('modely')}>
              <div className="vehicle-image">
                <img src="/images/Homepage-Card-Model-Y-Desktop.jpg" alt="Model Y" />
              </div>
              <div className="vehicle-content">
                <h3>Model Y</h3>
                <p className="vehicle-price">From $44,990</p>
                <p className="vehicle-description">The most versatile Tesla with room for up to 7 passengers</p>
                <div className="vehicle-specs">
                  <span>330 mi range</span>
                  <span>3.5s 0-60 mph</span>
                  <span>155 mph top speed</span>
                </div>
                <div className="vehicle-buttons">
                  <button className="tesla-btn tesla-btn-primary">Order Now</button>
                  <button className="tesla-btn tesla-btn-secondary">Learn More</button>
                </div>
              </div>
            </div>

            {/* Model X */}
            <div className="vehicle-card" onClick={() => handleCarClick('modelx')}>
              <div className="vehicle-image">
                <img src="/images/Homepage-Card-Model-X-Desktop.jpg" alt="Model X" />
              </div>
              <div className="vehicle-content">
                <h3>Model X</h3>
                <p className="vehicle-price">From $98,990</p>
                <p className="vehicle-description">The safest, most capable SUV ever built</p>
                <div className="vehicle-specs">
                  <span>348 mi range</span>
                  <span>2.5s 0-60 mph</span>
                  <span>163 mph top speed</span>
                </div>
                <div className="vehicle-buttons">
                  <button className="tesla-btn tesla-btn-primary">Order Now</button>
                  <button className="tesla-btn tesla-btn-secondary">Learn More</button>
                </div>
              </div>
            </div>

            {/* Cybertruck */}
            <div className="vehicle-card" onClick={() => handleCarClick('cybertruck')}>
              <div className="vehicle-image">
                <img src="/images/cyber.webp" alt="Cybertruck" />
              </div>
              <div className="vehicle-content">
                <h3>Cybertruck</h3>
                <p className="vehicle-price">Lease From $999/mo</p>
                <p className="vehicle-description">Built for any planet. Ultra-hard 30X cold-rolled stainless steel</p>
                <div className="vehicle-specs">
                  <span>340+ mi range</span>
                  <span>2.6s 0-60 mph</span>
                  <span>11,000 lbs towing</span>
                </div>
                <div className="vehicle-buttons">
                  <button className="tesla-btn tesla-btn-primary">Order Now</button>
                  <button className="tesla-btn tesla-btn-secondary">Learn More</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vehicle Features */}
      <section className="vehicles-features scroll-reveal">
        <div className="features-container">
          <h2>Why Choose Tesla?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Safety First</h3>
              <p>5-star safety rating across all models with advanced safety features</p>
            </div>
            <div className="feature-item">
              <h3>Performance</h3>
              <p>Instant torque and acceleration that outperforms traditional vehicles</p>
            </div>
            <div className="feature-item">
              <h3>Efficiency</h3>
              <p>Industry-leading range and energy efficiency for maximum value</p>
            </div>
            <div className="feature-item">
              <h3>Technology</h3>
              <p>Over-the-air updates and cutting-edge autonomous driving features</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Models */}
      <section className="vehicles-compare scroll-reveal">
        <div className="compare-container">
          <h2>Compare Models</h2>
          <div className="compare-table">
            <div className="compare-header">
              <div className="compare-cell"></div>
              <div className="compare-cell">Model 3</div>
              <div className="compare-cell">Model Y</div>
              <div className="compare-cell">Model X</div>
              <div className="compare-cell">Cybertruck</div>
            </div>
            <div className="compare-row">
              <div className="compare-cell">Starting Price</div>
              <div className="compare-cell">$38,990</div>
              <div className="compare-cell">$44,990</div>
              <div className="compare-cell">$98,990</div>
              <div className="compare-cell">$60,990</div>
            </div>
            <div className="compare-row">
              <div className="compare-cell">Range</div>
              <div className="compare-cell">358 mi</div>
              <div className="compare-cell">330 mi</div>
              <div className="compare-cell">348 mi</div>
              <div className="compare-cell">340+ mi</div>
            </div>
            <div className="compare-row">
              <div className="compare-cell">0-60 mph</div>
              <div className="compare-cell">3.1s</div>
              <div className="compare-cell">3.5s</div>
              <div className="compare-cell">2.5s</div>
              <div className="compare-cell">2.6s</div>
            </div>
            <div className="compare-row">
              <div className="compare-cell">Seating</div>
              <div className="compare-cell">5</div>
              <div className="compare-cell">5-7</div>
              <div className="compare-cell">6-7</div>
              <div className="compare-cell">6</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Vehicles;