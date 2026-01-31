import React, { useEffect } from 'react';

function Shop() {
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
    <div className="tesla-shop-page">
      {/* Hero Section */}
      <section className="shop-hero">
        <div className="shop-hero-content">
          <h1>Tesla Shop</h1>
          <p>Lifestyle products inspired by Tesla's mission</p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="shop-categories scroll-reveal">
        <div className="categories-container">
          <h2>Shop by Category</h2>
          <div className="categories-grid">
            <div className="category-card">
              <h3>Apparel</h3>
              <p>Premium clothing and accessories</p>
              <button className="tesla-btn tesla-btn-primary">Shop Now</button>
            </div>
            <div className="category-card">
              <h3>Lifestyle</h3>
              <p>Home and lifestyle products</p>
              <button className="tesla-btn tesla-btn-primary">Shop Now</button>
            </div>
            <div className="category-card">
              <h3>Vehicle Accessories</h3>
              <p>Enhance your Tesla experience</p>
              <button className="tesla-btn tesla-btn-primary">Shop Now</button>
            </div>
            <div className="category-card">
              <h3>Charging</h3>
              <p>Home charging solutions</p>
              <button className="tesla-btn tesla-btn-primary">Shop Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="shop-featured scroll-reveal">
        <div className="featured-container">
          <h2>Featured Products</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <div className="product-placeholder">Tesla Logo Tee</div>
              </div>
              <div className="product-info">
                <h3>Tesla Logo Tee</h3>
                <p className="product-price">$35</p>
                <button className="tesla-btn tesla-btn-primary">Add to Cart</button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <div className="product-placeholder">Wall Connector</div>
              </div>
              <div className="product-info">
                <h3>Wall Connector</h3>
                <p className="product-price">$475</p>
                <button className="tesla-btn tesla-btn-primary">Add to Cart</button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <div className="product-placeholder">Tesla Cap</div>
              </div>
              <div className="product-info">
                <h3>Tesla Cap</h3>
                <p className="product-price">$25</p>
                <button className="tesla-btn tesla-btn-primary">Add to Cart</button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <div className="product-placeholder">Model S Key Fob</div>
              </div>
              <div className="product-info">
                <h3>Model S Key Fob</h3>
                <p className="product-price">$175</p>
                <button className="tesla-btn tesla-btn-primary">Add to Cart</button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <div className="product-placeholder">Tesla Mug</div>
              </div>
              <div className="product-info">
                <h3>Tesla Mug</h3>
                <p className="product-price">$15</p>
                <button className="tesla-btn tesla-btn-primary">Add to Cart</button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <div className="product-placeholder">Phone Charger</div>
              </div>
              <div className="product-info">
                <h3>Wireless Phone Charger</h3>
                <p className="product-price">$125</p>
                <button className="tesla-btn tesla-btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Benefits */}
      <section className="shop-benefits scroll-reveal">
        <div className="benefits-container">
          <h2>Why Shop Tesla?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Premium Quality</h3>
              <p>High-quality products designed with Tesla's attention to detail</p>
            </div>
            <div className="benefit-item">
              <h3>Fast Shipping</h3>
              <p>Quick delivery to get your Tesla products to you faster</p>
            </div>
            <div className="benefit-item">
              <h3>Easy Returns</h3>
              <p>Hassle-free returns within 30 days of purchase</p>
            </div>
            <div className="benefit-item">
              <h3>Exclusive Items</h3>
              <p>Unique products you can't find anywhere else</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;