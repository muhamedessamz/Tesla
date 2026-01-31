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
      <section
        className="shop-hero"
        style={{
          backgroundImage: "url('https://www.shop4tesla.com/cdn/shop/articles/storei.png?v=1734347508')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
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
                <img src="https://www.dudeme.in/cdn/shop/products/Tesla-text-BLACK_600x.jpg?v=1662013281" alt="Tesla Logo Tee" />
              </div>
              <div className="product-info">
                <h3>Tesla Logo Tee</h3>
                <p className="product-price">$35</p>
                <button className="tesla-btn tesla-btn-primary">Add to Cart</button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img src="https://m.media-amazon.com/images/I/51sFtjjA7eL.jpg" alt="Wall Connector" />
              </div>
              <div className="product-info">
                <h3>Wall Connector</h3>
                <p className="product-price">$475</p>
                <button className="tesla-btn tesla-btn-primary">Add to Cart</button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img src="https://m.media-amazon.com/images/I/51KKekFy2sL._AC_UF1000,1000_QL80_.jpg" alt="Tesla Cap" />
              </div>
              <div className="product-info">
                <h3>Tesla Cap</h3>
                <p className="product-price">$25</p>
                <button className="tesla-btn tesla-btn-primary">Add to Cart</button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img src="https://www.tesland.com/media/catalog/product/cache/e04ab65082dc5002ab28296009d7ef82/t/e/teslaskeyfob3dmodel01.jpg9befd06d-67bd-41ec-923a-cf289490a41flarge.jpg" alt="Model S Key Fob" />
              </div>
              <div className="product-info">
                <h3>Model S Key Fob</h3>
                <p className="product-price">$175</p>
                <button className="tesla-btn tesla-btn-primary">Add to Cart</button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img src="https://cdn.shopify.com/s/files/1/0001/5660/products/DSC9920_1024x1024.jpg?v=1448861324" alt="Tesla Mug" />
              </div>
              <div className="product-info">
                <h3>Tesla Mug</h3>
                <p className="product-price">$15</p>
                <button className="tesla-btn tesla-btn-primary">Add to Cart</button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img src="https://images.cars.com/cldstatic/wp-content/uploads/tesla-model-y-2021-22-charging-port-interior-sedan-scaled.jpg" alt="Wireless Phone Charger" />
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
              <div className="benefit-icon" style={{ WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z'%3E%3C/path%3E%3Cline x1='7' y1='7' x2='7.01' y2='7'%3E%3C/line%3E%3C/svg%3E\")" }}></div>
              <h3>Premium Quality</h3>
              <p>High-quality products designed with Tesla's attention to detail</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon" style={{ WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='1' y='3' width='15' height='13'%3E%3C/rect%3E%3Cpolygon points='16 8 20 8 23 11 23 16 16 16 16 8'%3E%3C/polygon%3E%3Ccircle cx='5.5' cy='18.5' r='2.5'%3E%3C/circle%3E%3Ccircle cx='18.5' cy='18.5' r='2.5'%3E%3C/circle%3E%3C/svg%3E\")" }}></div>
              <h3>Fast Shipping</h3>
              <p>Quick delivery to get your Tesla products to you faster</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon" style={{ WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='23 4 23 10 17 10'%3E%3C/polyline%3E%3Cpath d='M20.49 15a9 9 0 1 1-2.12-9.36L23 10'%3E%3C/path%3E%3C/svg%3E\")" }}></div>
              <h3>Easy Returns</h3>
              <p>Hassle-free returns within 30 days of purchase</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon" style={{ WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/xml' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='8' r='7'%3E%3C/circle%3E%3Cpolyline points='8.21 13.89 7 23 12 20 17 23 15.79 13.88'%3E%3C/polyline%3E%3C/svg%3E\")" }}></div>
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