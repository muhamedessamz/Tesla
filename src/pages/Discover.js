import React, { useEffect } from 'react';

function Discover() {
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
    <div className="tesla-discover-page">
      {/* Hero Section */}
      <section
        className="discover-hero"
        style={{
          backgroundImage: "url('https://media.whichcar.com.au/uploads/2025/01/776791ed-2025-tesla-model-y-facelift-whichcar-australia-08.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="discover-hero-content">
          <h1>Experience Tesla</h1>
          <p>Defining the future of global sustainable transportation through relentless innovation.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="discover-features scroll-reveal">
        <div className="features-container">
          <div className="feature-large">
            <div className="feature-content">
              <h2>Full Self-Driving (Supervised)</h2>
              <p>Experience the most advanced driver assistance features available today</p>
              <div className="feature-buttons">
                <button className="tesla-btn tesla-btn-primary">Demo Drive</button>
                <button className="tesla-btn tesla-btn-secondary">Learn More</button>
              </div>
            </div>
            <div className="feature-video">
              <video autoPlay muted loop playsInline>
                <source src="/images/Electric Cars, Solar & Clean Energy _ Tesla.webm" type="video/webm" />
                <source src="/images/فيديو_ترويجي_لسيارة_تسلا_موديل_S.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Grid */}
      <section className="discover-innovation scroll-reveal">
        <div className="innovation-container">
          <h2>Tesla Innovation</h2>
          <div className="innovation-grid">
            <div className="innovation-item">
              <h3>Autopilot</h3>
              <p>Advanced driver assistance features that enhance safety and convenience</p>
            </div>
            <div className="innovation-item">
              <h3>Over-the-Air Updates</h3>
              <p>Your car gets better over time with new features and improvements</p>
            </div>
            <div className="innovation-item">
              <h3>Supercharger Network</h3>
              <p>The world's fastest charging network with global coverage</p>
            </div>
            <div className="innovation-item">
              <h3>Battery Technology</h3>
              <p>Industry-leading battery technology for maximum range and performance</p>
            </div>
            <div className="innovation-item">
              <h3>Manufacturing</h3>
              <p>Revolutionary manufacturing processes for sustainable production</p>
            </div>
            <div className="innovation-item">
              <h3>AI & Robotics</h3>
              <p>Cutting-edge artificial intelligence and robotics development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="discover-sustainability scroll-reveal">
        <div className="sustainability-container">
          <h2>Sustainable Future</h2>
          <div className="sustainability-content">
            <div className="sustainability-text">
              <h3>Accelerating the World's Transition to Sustainable Energy</h3>
              <p>
                Tesla's mission is to accelerate the world's transition to sustainable energy.
                We design and manufacture electric vehicles, energy storage systems, and solar panels
                to create a sustainable energy ecosystem.
              </p>
              <ul>
                <li>Zero emissions driving</li>
                <li>Renewable energy generation</li>
                <li>Energy storage solutions</li>
                <li>Sustainable manufacturing</li>
              </ul>
            </div>
            <div className="sustainability-stats">
              <div className="stat-item">
                <span className="stat-number">5M+</span>
                <span className="stat-label">Vehicles Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50B+</span>
                <span className="stat-label">Miles Driven</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10M+</span>
                <span className="stat-label">Tons CO₂ Saved</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Tesla */}
      <section className="discover-experience scroll-reveal">
        <div className="experience-container">
          <h2>Experience Tesla</h2>
          <div className="experience-grid">
            <div className="experience-item">
              <h3>Test Drive</h3>
              <p>Schedule a test drive to experience Tesla's performance and technology</p>
              <button className="tesla-btn tesla-btn-primary">Schedule Drive</button>
            </div>
            <div className="experience-item">
              <h3>Showrooms</h3>
              <p>Visit our showrooms to see Tesla vehicles and speak with our specialists</p>
              <button className="tesla-btn tesla-btn-primary">Find Location</button>
            </div>
            <div className="experience-item">
              <h3>Virtual Tour</h3>
              <p>Take a virtual tour of Tesla vehicles from the comfort of your home</p>
              <button className="tesla-btn tesla-btn-primary">Start Tour</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Discover;