import React, { useEffect } from 'react';

function Account() {
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

    const dashboardItems = [
        {
            title: 'Dashboard',
            icon: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Crect x=\'3\' y=\'3\' width=\'7\' height=\'7\'%3E%3C/rect%3E%3Crect x=\'14\' y=\'3\' width=\'7\' height=\'7\'%3E%3C/rect%3E%3Crect x=\'14\' y=\'14\' width=\'7\' height=\'7\'%3E%3C/rect%3E%3Crect x=\'3\' y=\'14\' width=\'7\' height=\'7\'%3E%3C/rect%3E%3C/svg%3E")',
            desc: 'Overview of your Tesla ecosystem'
        },
        {
            title: 'Purchases',
            icon: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z\'%3E%3C/path%3E%3Cline x1=\'3\' y1=\'6\' x2=\'21\' y2=\'6\'%3E%3C/line%3E%3Cpath d=\'M16 10a4 4 0 0 1-8 0\'%3E%3C/path%3E%3C/svg%3E")',
            desc: 'Order history and tracking'
        },
        {
            title: 'Charging',
            icon: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'M13 2L3 14h9l-1 8 10-12h-9l1-8z\'%3E%3C/path%3E%3C/svg%3E")',
            desc: 'Supercharging history and payment'
        },
        {
            title: 'Settings',
            icon: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'3\'%3E%3C/circle%3E%3Cpath d=\'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\'%3E%3C/path%3E%3C/svg%3E")',
            desc: 'Account details and security'
        }
    ];

    return (
        <div className="tesla-account-page">
            {/* Account Hero */}
            <section className="account-hero">
                <div className="account-container">
                    <div className="profile-header scroll-reveal">
                        <div className="profile-info">
                            <h1>Muhamed Essam</h1>
                            <p>Tesla Owner since 2023</p>
                        </div>
                        <div className="profile-actions">
                            <button className="tesla-btn tesla-btn-outline btn-sm">Sign Out</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Account Dashboard */}
            <section className="account-dashboard scroll-reveal">
                <div className="account-container">
                    <div className="dashboard-grid">
                        {dashboardItems.map((item, index) => (
                            <div key={index} className="account-card">
                                <div className="account-icon" style={{ WebkitMaskImage: item.icon }}></div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <a href="#" className="account-link">Manage</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* My Vehicles Section */}
            <section className="my-vehicles account-container scroll-reveal">
                <h2 className="section-title">My Vehicles</h2>
                <div className="vehicle-card-premium">
                    <div className="vehicle-visual">
                        <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD.jpg" alt="Model S" />
                    </div>
                    <div className="vehicle-details">
                        <div className="badge-status">Active</div>
                        <h3>Model S Plaid</h3>
                        <div className="specs-mini">
                            <span>Mileage: 2,450 mi</span>
                            <span>•</span>
                            <span>Software: v11.1</span>
                        </div>
                        <div className="vehicle-actions">
                            <button className="tesla-btn tesla-btn-primary">View Vehicle</button>
                            <button className="tesla-btn tesla-btn-secondary">Schedule Service</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Helpful Links */}
            <section className="account-help account-container scroll-reveal">
                <div className="help-links-box">
                    <h3>Need help?</h3>
                    <div className="help-grid">
                        <a href="/support">Support Center</a>
                        <a href="#">Roadside Assistance</a>
                        <a href="#">Safety Instructions</a>
                        <a href="#">Financial Services</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Account;
