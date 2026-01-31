import React from 'react';

function Cybertruck() {
  return (
    <div className="tesla-car-page">
      {/* Hero Section */}
      <section className="car-hero" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(/images/cyber.webp)',
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
          <h1 className="car-title">Cybertruck</h1>
          <p className="car-subtitle">Lease From $999/mo for a Limited Time</p>
          <p className="car-description">Built for any planet. Ultra-hard 30X cold-rolled stainless steel</p>
          <div className="car-hero-buttons">
            <button className="tesla-btn tesla-btn-primary">Order Now</button>
            <button className="tesla-btn tesla-btn-secondary">Schedule Test Drive</button>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="car-specs">
        <div className="specs-container">
          <h2>Cybertruck Specifications</h2>
          <div className="specs-grid">
            <div className="spec-item">
              <h3>Range</h3>
              <p>340+ mi</p>
              <span>EPA est. range</span>
            </div>
            <div className="spec-item">
              <h3>Towing</h3>
              <p>11,000 lbs</p>
              <span>Maximum capacity</span>
            </div>
            <div className="spec-item">
              <h3>0-60 mph</h3>
              <p>2.6 s</p>
              <span>Acceleration</span>
            </div>
            <div className="spec-item">
              <h3>Payload</h3>
              <p>2,500 lbs</p>
              <span>Truck bed capacity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="car-features">
        <div className="features-container">
          <h2>Cybertruck Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Ultra-Hard Steel</h3>
              <p>30X cold-rolled stainless steel exoskeleton</p>
            </div>
            <div className="feature-item">
              <h3>Armor Glass</h3>
              <p>Ultra-strong glass and polymer-layered composite</p>
            </div>
            <div className="feature-item">
              <h3>Adaptive Air Suspension</h3>
              <p>Raise and lower suspension 4" in either direction</p>
            </div>
            <div className="feature-item">
              <h3>Powershare</h3>
              <p>Power your home for more than 3 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section className="car-order">
        <div className="order-container">
          <h2>Order Your Cybertruck</h2>
          <div className="order-options">
            <div className="order-variant">
              <h3>Cybertruck RWD</h3>
              <p className="price">$60,990</p>
              <ul>
                <li>250+ mi range</li>
                <li>6.5s 0-60 mph</li>
                <li>7,500 lbs towing</li>
                <li>Single motor</li>
              </ul>
              <button className="tesla-btn tesla-btn-primary">Order Now</button>
            </div>
            <div className="order-variant">
              <h3>Cybertruck AWD</h3>
              <p className="price">$79,990</p>
              <ul>
                <li>340+ mi range</li>
                <li>4.1s 0-60 mph</li>
                <li>10,000 lbs towing</li>
                <li>Dual motor</li>
              </ul>
              <button className="tesla-btn tesla-btn-primary">Order Now</button>
            </div>
            <div className="order-variant featured">
              <h3>Cyberbeast</h3>
              <p className="price">$99,990</p>
              <ul>
                <li>320+ mi range</li>
                <li>2.6s 0-60 mph</li>
                <li>11,000 lbs towing</li>
                <li>Tri-motor</li>
              </ul>
              <button className="tesla-btn tesla-btn-primary">Order Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cybertruck;