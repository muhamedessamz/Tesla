import React from 'react';

function ModelY() {
  return (
    <div className="tesla-car-page">
      {/* Hero Section */}
      <section className="car-hero" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(/images/Homepage-Card-Model-Y-Desktop.jpg)',
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
          <h1 className="car-title">Model Y</h1>
          <p className="car-subtitle">From $44,990</p>
          <p className="car-description">The most versatile Tesla with room for up to 7 passengers</p>
          <div className="car-hero-buttons">
            <button className="tesla-btn tesla-btn-primary">Order Now</button>
            <button className="tesla-btn tesla-btn-secondary">Schedule Test Drive</button>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="car-specs">
        <div className="specs-container">
          <h2>Model Y Specifications</h2>
          <div className="specs-grid">
            <div className="spec-item">
              <h3>Range</h3>
              <p>330 mi</p>
              <span>EPA est. range</span>
            </div>
            <div className="spec-item">
              <h3>Top Speed</h3>
              <p>155 mph</p>
              <span>Maximum speed</span>
            </div>
            <div className="spec-item">
              <h3>0-60 mph</h3>
              <p>3.5 s</p>
              <span>Acceleration</span>
            </div>
            <div className="spec-item">
              <h3>Cargo Space</h3>
              <p>76 ft³</p>
              <span>Maximum storage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="car-features">
        <div className="features-container">
          <h2>Model Y Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>7-Seat Option</h3>
              <p>Optional third row for maximum versatility</p>
            </div>
            <div className="feature-item">
              <h3>Falcon Wing Doors</h3>
              <p>Easy access even in tight parking spaces</p>
            </div>
            <div className="feature-item">
              <h3>All-Wheel Drive</h3>
              <p>Dual motor setup for enhanced traction</p>
            </div>
            <div className="feature-item">
              <h3>Panoramic Glass Roof</h3>
              <p>Expansive view with UV protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section className="car-order">
        <div className="order-container">
          <h2>Order Your Model Y</h2>
          <div className="order-options">
            <div className="order-variant">
              <h3>Model Y RWD</h3>
              <p className="price">$44,990</p>
              <ul>
                <li>260 mi range</li>
                <li>6.6s 0-60 mph</li>
                <li>135 mph top speed</li>
              </ul>
              <button className="tesla-btn tesla-btn-primary">Order Now</button>
            </div>
            <div className="order-variant">
              <h3>Model Y Long Range</h3>
              <p className="price">$52,990</p>
              <ul>
                <li>330 mi range</li>
                <li>4.8s 0-60 mph</li>
                <li>135 mph top speed</li>
              </ul>
              <button className="tesla-btn tesla-btn-primary">Order Now</button>
            </div>
            <div className="order-variant featured">
              <h3>Model Y Performance</h3>
              <p className="price">$58,990</p>
              <ul>
                <li>303 mi range</li>
                <li>3.5s 0-60 mph</li>
                <li>155 mph top speed</li>
              </ul>
              <button className="tesla-btn tesla-btn-primary">Order Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ModelY;