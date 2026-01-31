import React from 'react';

function ModelX() {
  return (
    <div className="tesla-car-page">
      {/* Hero Section */}
      <section className="car-hero" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(/images/Homepage-Card-Model-X-Desktop.jpg)',
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
          <h1 className="car-title">Model X</h1>
          <p className="car-subtitle">Now Includes Luxe Package With FSD (Supervised) and More</p>
          <p className="car-description">The safest, most capable SUV ever built</p>
          <div className="car-hero-buttons">
            <button className="tesla-btn tesla-btn-primary">Order Now</button>
            <button className="tesla-btn tesla-btn-secondary">Schedule Test Drive</button>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="car-specs">
        <div className="specs-container">
          <h2>Model X Specifications</h2>
          <div className="specs-grid">
            <div className="spec-item">
              <h3>Range</h3>
              <p>348 mi</p>
              <span>EPA est. range</span>
            </div>
            <div className="spec-item">
              <h3>Top Speed</h3>
              <p>163 mph</p>
              <span>Maximum speed</span>
            </div>
            <div className="spec-item">
              <h3>0-60 mph</h3>
              <p>2.5 s</p>
              <span>Acceleration</span>
            </div>
            <div className="spec-item">
              <h3>Seating</h3>
              <p>7 Adults</p>
              <span>Maximum capacity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="car-features">
        <div className="features-container">
          <h2>Model X Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Falcon Wing Doors</h3>
              <p>Signature doors that open upward for easy access</p>
            </div>
            <div className="feature-item">
              <h3>Tri-Motor All-Wheel Drive</h3>
              <p>Unparalleled performance and traction control</p>
            </div>
            <div className="feature-item">
              <h3>5-Star Safety Rating</h3>
              <p>Lowest probability of injury of any SUV ever tested</p>
            </div>
            <div className="feature-item">
              <h3>Bioweapon Defense Mode</h3>
              <p>HEPA filtration system for ultimate air quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section className="car-order">
        <div className="order-container">
          <h2>Order Your Model X</h2>
          <div className="order-options">
            <div className="order-variant">
              <h3>Model X</h3>
              <p className="price">$98,990</p>
              <ul>
                <li>348 mi range</li>
                <li>3.8s 0-60 mph</li>
                <li>155 mph top speed</li>
                <li>Dual motor AWD</li>
              </ul>
              <button className="tesla-btn tesla-btn-primary">Order Now</button>
            </div>
            <div className="order-variant featured">
              <h3>Model X Plaid</h3>
              <p className="price">$108,990</p>
              <ul>
                <li>333 mi range</li>
                <li>2.5s 0-60 mph</li>
                <li>163 mph top speed</li>
                <li>Tri-motor AWD</li>
              </ul>
              <button className="tesla-btn tesla-btn-primary">Order Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ModelX;