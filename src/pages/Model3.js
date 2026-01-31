import React from 'react';

function Model3() {
  return (
    <div className="tesla-car-page">
      {/* Hero Section */}
      <section className="car-hero" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(/images/Homepage-Card-Model-3-Desktop.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="car-hero-content">
          <h1 className="car-title">Model 3</h1>
          <p className="car-subtitle">From $38,990</p>
          <p className="car-description">The most affordable Tesla with impressive range and performance</p>
          <div className="car-hero-buttons">
            <button className="tesla-btn tesla-btn-primary">Order Now</button>
            <button className="tesla-btn tesla-btn-secondary">Schedule Test Drive</button>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="car-specs">
        <div className="specs-container">
          <h2>Model 3 Specifications</h2>
          <div className="specs-grid">
            <div className="spec-item">
              <h3>Range</h3>
              <p>358 mi</p>
              <span>EPA est. range</span>
            </div>
            <div className="spec-item">
              <h3>Top Speed</h3>
              <p>162 mph</p>
              <span>Maximum speed</span>
            </div>
            <div className="spec-item">
              <h3>0-60 mph</h3>
              <p>3.1 s</p>
              <span>Acceleration</span>
            </div>
            <div className="spec-item">
              <h3>Peak Power</h3>
              <p>510 hp</p>
              <span>Dual motor</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="car-features">
        <div className="features-container">
          <h2>Model 3 Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Autopilot</h3>
              <p>Standard Autopilot features for enhanced safety</p>
            </div>
            <div className="feature-item">
              <h3>Premium Interior</h3>
              <p>Minimalist design with premium materials</p>
            </div>
            <div className="feature-item">
              <h3>Glass Roof</h3>
              <p>All-glass roof for an open, airy feel</p>
            </div>
            <div className="feature-item">
              <h3>Supercharging</h3>
              <p>Access to Tesla's global Supercharger network</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section className="car-order">
        <div className="order-container">
          <h2>Order Your Model 3</h2>
          <div className="order-options">
            <div className="order-variant">
              <h3>Model 3 RWD</h3>
              <p className="price">$38,990</p>
              <ul>
                <li>272 mi range</li>
                <li>5.8s 0-60 mph</li>
                <li>140 mph top speed</li>
              </ul>
              <button className="tesla-btn tesla-btn-primary">Order Now</button>
            </div>
            <div className="order-variant">
              <h3>Model 3 Long Range</h3>
              <p className="price">$47,990</p>
              <ul>
                <li>358 mi range</li>
                <li>4.2s 0-60 mph</li>
                <li>145 mph top speed</li>
              </ul>
              <button className="tesla-btn tesla-btn-primary">Order Now</button>
            </div>
            <div className="order-variant featured">
              <h3>Model 3 Performance</h3>
              <p className="price">$54,990</p>
              <ul>
                <li>315 mi range</li>
                <li>3.1s 0-60 mph</li>
                <li>162 mph top speed</li>
              </ul>
              <button className="tesla-btn tesla-btn-primary">Order Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Model3;