import React, { useEffect } from 'react';

function Support() {
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

    const categories = [
        { title: 'Vehicles', icon: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='1' y='3' width='15' height='13'%3E%3C/rect%3E%3Cpolygon points='16 8 20 8 23 11 23 16 16 16 16 8'%3E%3C/polygon%3E%3Ccircle cx='5.5' cy='18.5' r='2.5'%3E%3C/circle%3E%3Ccircle cx='18.5' cy='18.5' r='2.5'%3E%3C/circle%3E%3C/svg%3E\")" },
        { title: 'Energy', icon: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M13 2L3 14h9l-1 8 10-12h-9l1-8z'%3E%3C/path%3E%3C/svg%3E\")" },
        { title: 'Charging', icon: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18.88 12.35l-9.94 9.94a2 2 0 0 1-2.83 0L2 18.17a2 2 0 0 1 0-2.83l9.94-9.94a2 2 0 0 1 2.83 0l4.11 4.12a2 2 0 0 1 0 2.83z'%3E%3C/path%3E%3Cpath d='M11.94 15.17l-1.41-1.41'%3E%3C/path%3E%3Cpath d='M14.06 13.06l-1.41-1.41'%3E%3C/path%3E%3C/svg%3E\")" },
        { title: 'Account', icon: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E\")" }
    ];

    return (
        <div className="tesla-support-page">
            {/* Search Hero */}
            <section className="support-hero">
                <div className="support-hero-content">
                    <h1>Tesla Support</h1>
                    <div className="support-search-container">
                        <div className="search-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </div>
                        <input type="text" placeholder="Search Support" className="support-search-input" />
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="support-categories scroll-reveal">
                <div className="support-container">
                    <div className="support-grid">
                        {categories.map((cat, index) => (
                            <div key={index} className="support-card">
                                <div className="support-icon" style={{ WebkitMaskImage: cat.icon }}></div>
                                <h3>{cat.title}</h3>
                                <p>Support for {cat.title.toLowerCase()} related issues and questions.</p>
                                <a href="#" className="support-link">Browse Articles</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="support-contact scroll-reveal">
                <div className="support-container">
                    <h2 className="section-title">Contact & Support</h2>
                    <div className="contact-methods-grid">
                        <div className="contact-method-card">
                            <div className="method-icon" style={{ WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.18-2.18a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'%3E%3C/path%3E%3C/svg%3E\")" }}></div>
                            <h3>Phone Assistance</h3>
                            <p>Speak directly with our support specialists for urgent vehicle or energy concerns.</p>
                            <span className="method-info">1-888-518-3752</span>
                        </div>
                        <div className="contact-method-card">
                            <div className="method-icon" style={{ WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'%3E%3C/path%3E%3C/svg%3E\")" }}></div>
                            <h3>Global Support</h3>
                            <p>Submit a support request through your Tesla Account for non-urgent assistance.</p>
                            <a href="#" className="method-link">Get Help Online</a>
                        </div>
                        <div className="contact-method-card">
                            <div className="method-icon" style={{ WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'%3E%3C/path%3E%3Cline x1='12' y1='9' x2='12' y2='13'%3E%3C/line%3E%3Cline x1='12' y1='17' x2='12.01' y2='17'%3E%3C/line%3E%3C/svg%3E\")" }}></div>
                            <h3>Roadside Help</h3>
                            <p>24/7 Roadside Assistance available via the Tesla app for breakdowns or lockouts.</p>
                            <button className="tesla-btn tesla-btn-outline btn-sm">Request Help</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="support-resources scroll-reveal">
                <div className="support-container">
                    <div className="resources-flex">
                        <div className="resource-item">
                            <h3>Service & Collision</h3>
                            <p>Schedule a service appointment, find a body shop or view service manuals.</p>
                            <button className="tesla-btn tesla-btn-outline">Learn More</button>
                        </div>
                        <div className="resource-item">
                            <h3>Contact Us</h3>
                            <p>Get in touch with a Tesla support representative for specialized help.</p>
                            <button className="tesla-btn tesla-btn-primary">Contact Support</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Support;
