import React, { useState, useEffect } from 'react';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'cybertruck',
      title: 'Cybertruck',
      subtitle: 'Experience the Future of Transport',
      image: '/images/cyber.webp',
      buttons: [
        { text: 'Custom Order', type: 'primary' },
        { text: 'Demo Drive', type: 'secondary' }
      ],
      textColor: 'white',
      background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%)'
    },
    {
      id: 'model3',
      title: 'Model 3',
      subtitle: 'Efficiency Meets Elegance',
      image: '/images/Homepage-Card-Model-3-Desktop.jpg',
      buttons: [
        { text: 'Explore Interior', type: 'primary' },
        { text: 'View Inventory', type: 'secondary' }
      ],
      textColor: 'white',
      background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.3) 100%)'
    },
    {
      id: 'modelx',
      title: 'Model X',
      subtitle: 'The Ultimate Utility Vehicle',
      image: '/images/Homepage-Card-Model-X-Desktop.jpg',
      buttons: [
        { text: 'Order Now', type: 'primary' },
        { text: 'Learn More', type: 'secondary' }
      ],
      textColor: 'white',
      background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.3) 100%)'
    },
    {
      id: 'modely',
      title: 'Model Y',
      subtitle: 'Versatility in Every Mile',
      image: '/images/Homepage-Card-Model-Y-Desktop.jpg',
      buttons: [
        { text: 'Custom Order', type: 'primary' },
        { text: 'Demo Drive', type: 'secondary' }
      ],
      textColor: 'white',
      background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.3) 100%)'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="tesla-homepage">
      {/* Hero Carousel */}
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `${slide.background}, url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <div className="hero-buttons">
                  {slide.buttons.map((button, btnIndex) => (
                    <button
                      key={btnIndex}
                      className={`tesla-btn ${button.type === 'primary' ? 'tesla-btn-primary' : 'tesla-btn-secondary'}`}
                    >
                      {button.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button className="carousel-nav prev" onClick={prevSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="carousel-nav next" onClick={nextSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Features That Come Standard Section */}
      <section className="features-section scroll-reveal">
        <div className="features-container">
          <div className="features-video">
            <video autoPlay muted loop playsInline>
              <source src="/images/Electric Cars, Solar & Clean Energy _ Tesla.webm" type="video/webm" />
              <source src="/images/فيديو_ترويجي_لسيارة_تسلا_موديل_S.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="features-content">
            <h2 className="features-title">Designed for Performance</h2>
            <p className="section-description">Every element is crafted for speed, efficiency, and safety.</p>
            <button className="tesla-btn tesla-btn-primary">Learn More</button>
          </div>
        </div>
      </section>

      {/* NEW: Innovation & Harmony Section */}
      <section className="innovation-luxury-section scroll-reveal">
        <div className="container-premium">
          <div className="innovation-grid-wrap">
            <div className="innovation-text-col">
              <span className="section-badge">Harmony</span>
              <h2 className="section-title-premium">Intelligence Meets Luxury</h2>
              <p className="section-p-premium">
                Experience a seamless connection between human and machine. Our AI-driven
                cockpit adapts to your preferences, creating a sanctuary on wheels.
              </p>
              <div className="stats-mini-grid">
                <div className="stat-card-mini">
                  <h4>0.208 Cd</h4>
                  <p>Lowest Drag</p>
                </div>
                <div className="stat-card-mini">
                  <h4>360°</h4>
                  <p>Vision Range</p>
                </div>
              </div>
            </div>
            <div className="innovation-visual-col">
              <div className="glass-visual-box">
                <img src="/images/Homepage-Card-Model-3-Desktop.jpg" alt="Interior" className="parallax-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Products Section */}
      <section className="energy-section scroll-reveal">
        <div className="energy-container">
          <div className="energy-grid">
            {/* Solar Panels */}
            <div className="energy-card">
              <div className="energy-image">
                <img src="/images/Homepage-Card-Solar-Panels-Desktop.jpg" alt="Solar Panels" />
              </div>
              <div className="energy-content">
                <h3>Solar Panels</h3>
                <p>Lowest Cost Solar Panels in America</p>
                <div className="energy-buttons">
                  <button className="tesla-btn tesla-btn-primary">Order Now</button>
                  <button className="tesla-btn tesla-btn-secondary">Learn More</button>
                </div>
              </div>
            </div>

            {/* Solar Roof */}
            <div className="energy-card">
              <div className="energy-image">
                <img src="/images/Homepage-Card-Solar-Roof-Desktop.jpg" alt="Solar Roof" />
              </div>
              <div className="energy-content">
                <h3>Solar Roof</h3>
                <p>Produce Clean Energy From Your Roof</p>
                <div className="energy-buttons">
                  <button className="tesla-btn tesla-btn-primary">Order Now</button>
                  <button className="tesla-btn tesla-btn-secondary">Learn More</button>
                </div>
              </div>
            </div>

            {/* Powerwall */}
            <div className="energy-card energy-card-wide">
              <div className="energy-image">
                <img src="/images/Homepage-Card-Megapack-Desktop.jpg" alt="Powerwall" />
              </div>
              <div className="energy-content">
                <h3>Powerwall</h3>
                <p>Store Your Energy For Later Use</p>
                <div className="energy-buttons">
                  <button className="tesla-btn tesla-btn-primary">Order Now</button>
                  <button className="tesla-btn tesla-btn-secondary">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="innovation-luxury-section scroll-reveal" style={{ backgroundColor: '#000000', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container-premium">
          <div className="innovation-grid-wrap" style={{ flexDirection: 'row-reverse' }}>
            <div className="innovation-text-col">
              <span className="section-badge" style={{ backgroundColor: 'rgba(76, 175, 80, 0.1)', color: '#4caf50', border: '1px solid rgba(76, 175, 80, 0.2)' }}>Sustainability</span>
              <h2 className="section-title-premium" style={{ color: '#ffffff' }}>Zero Emissions. Zero Compromise.</h2>
              <p className="section-p-premium" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Our mission is to accelerate the world's transition to sustainable energy.
                From the way we build our cars to the energy that powers them, every step is designed for a cleaner planet.
              </p>
              <button className="tesla-btn tesla-btn-secondary">Read Our Mission</button>
            </div>
            <div className="innovation-visual-col">
              <div className="glass-visual-box">
                <img src="/images/Homepage-Card-Solar-Roof-Desktop.jpg" alt="Sustainability" className="parallax-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tesla Locations Map Section */}
      <section className="locations-section scroll-reveal">
        <div className="locations-container">
          <h2 className="locations-title">Experience Tesla</h2>
          <p className="locations-subtitle">Schedule a Demo Drive Today</p>

          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-overlay">
                <div className="location-marker" style={{ top: '30%', left: '20%' }}>
                  <div className="marker-dot"></div>
                  <span>New York</span>
                </div>
                <div className="location-marker" style={{ top: '40%', left: '15%' }}>
                  <div className="marker-dot"></div>
                  <span>Los Angeles</span>
                </div>
                <div className="location-marker" style={{ top: '25%', left: '70%' }}>
                  <div className="marker-dot"></div>
                  <span>London</span>
                </div>
                <div className="location-marker" style={{ top: '45%', left: '75%' }}>
                  <div className="marker-dot"></div>
                  <span>Berlin</span>
                </div>
                <div className="location-marker" style={{ top: '60%', left: '85%' }}>
                  <div className="marker-dot"></div>
                  <span>Shanghai</span>
                </div>
                <div className="location-marker" style={{ top: '70%', left: '50%' }}>
                  <div className="marker-dot"></div>
                  <span>Sydney</span>
                </div>
              </div>
              <svg className="world-map" viewBox="0 0 1000 500">
                <path d="M150,100 Q200,80 250,100 T350,120 L400,140 Q450,160 500,140 T600,120 L650,100 Q700,80 750,100 T850,120"
                  stroke="#3e6ae1" strokeWidth="2" fill="none" opacity="0.3" />
                <path d="M100,200 Q150,180 200,200 T300,220 L350,240 Q400,260 450,240 T550,220 L600,200 Q650,180 700,200 T800,220"
                  stroke="#3e6ae1" strokeWidth="2" fill="none" opacity="0.3" />
                <path d="M200,300 Q250,280 300,300 T400,320 L450,340 Q500,360 550,340 T650,320 L700,300 Q750,280 800,300"
                  stroke="#3e6ae1" strokeWidth="2" fill="none" opacity="0.3" />
              </svg>
            </div>
          </div>

          <div className="locations-actions">
            <button className="tesla-btn tesla-btn-primary">Find Us</button>
            <button className="tesla-btn tesla-btn-secondary">Schedule Service</button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
