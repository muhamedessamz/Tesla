import React from 'react';

function About() {
  return (
    <div className="py-5">
      <div className="container text-center mb-5">
        <h2 className="display-5 fw-bold mb-4">Tesla's Mission</h2>
        <p className="lead">To accelerate the world's transition to sustainable energy</p>
      </div>

      {/* Hero Section */}
      <div className="mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">Our Mission</h1>
              <p className="lead mb-4">Tesla was founded in 2003 by a group of engineers who wanted to prove that electric vehicles could be better, quicker and more fun to drive than gasoline cars.</p>
              <p>Today, Tesla builds not only all-electric vehicles but also infinitely scalable clean energy generation and storage products.</p>
              <p className="mb-4">Together, these products work to create a sustainable future for our planet.</p>
              <button className="btn btn-primary btn-lg">Learn More</button>
            </div>
            <div className="col-lg-6">
              <img src="https://www.tesla.com/sites/tesla/files/about-mission.jpg?202211170905" className="img-fluid rounded shadow" alt="Tesla Mission" />
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Section */}
      <div className="mb-5 bg-light text-dark py-5">
        <div className="container">
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src="https://www.tesla.com/sites/tesla/files/about-innovation.jpg?202211170905" className="img-fluid rounded shadow" alt="Tesla Innovation" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Our Innovation</h1>
              <p className="lead mb-4">From the Roadster to the Model S, from Autopilot to the Supercharger network, Tesla has consistently delivered groundbreaking innovations that have transformed the automotive industry.</p>
              <p>Our vertically integrated approach allows us to control every aspect of the vehicle and energy ecosystem, ensuring the highest quality and performance.</p>
              <p className="mb-4">With Gigafactories around the world, we're scaling up production to bring our clean energy solutions to more people than ever before.</p>
              <button className="btn btn-primary btn-lg">Explore Innovation</button>
            </div>
          </div>
        </div>
      </div>

      {/* Sustainability Section */}
      <div className="mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">Sustainability</h1>
              <p className="lead mb-4">At Tesla, sustainability is at the core of everything we do. From our mission to accelerate the world's transition to sustainable energy, to our commitment to reducing our environmental impact.</p>
              <p>We believe that business can and should be a force for good in the world. That's why we're constantly working to improve the sustainability of our products and operations.</p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Zero-emission vehicles</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Renewable energy generation</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Energy storage solutions</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Sustainable materials</li>
              </ul>
              <button className="btn btn-primary btn-lg">Read Our Impact Report</button>
            </div>
            <div className="col-lg-6">
              <img src="https://www.tesla.com/sites/tesla/files/about-sustainability.jpg?202211170905" className="img-fluid rounded shadow" alt="Tesla Sustainability" />
            </div>
          </div>
        </div>
      </div>

      {/* Manufacturing Section */}
      <div className="mb-5 bg-light text-dark py-5">
        <div className="container">
          <h2 className="display-5 fw-bold mb-5 text-center">Manufacturing</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <img src="https://www.tesla.com/sites/tesla/files/gigafactory-1.jpg?202211170905" className="img-fluid rounded mb-3" alt="Gigafactory 1" />
                  </div>
                  <h4 className="fw-bold mb-3">Gigafactory 1</h4>
                  <p>Our first Gigafactory in Nevada produces battery cells and packs, as well as electric motors and components.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <img src="https://www.tesla.com/sites/tesla/files/gigafactory-shanghai.jpg?202211170905" className="img-fluid rounded mb-3" alt="Gigafactory Shanghai" />
                  </div>
                  <h4 className="fw-bold mb-3">Gigafactory Shanghai</h4>
                  <p>Our first Gigafactory outside the United States, producing Model 3 and Model Y vehicles for global markets.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <img src="https://www.tesla.com/sites/tesla/files/gigafactory-berlin.jpg?202211170905" className="img-fluid rounded mb-3" alt="Gigafactory Berlin" />
                  </div>
                  <h4 className="fw-bold mb-3">Gigafactory Berlin</h4>
                  <p>Our European Gigafactory producing Model Y vehicles and battery systems, supporting sustainable transportation across Europe.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="mb-5">
        <div className="container">
          <h2 className="display-5 fw-bold mb-5 text-center">Leadership</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <img src="https://www.tesla.com/sites/tesla/files/elon-musk.jpg?202211170905" className="rounded-circle" alt="CEO" />
                  </div>
                  <h4 className="fw-bold">Elon Musk</h4>
                  <p className="text-muted mb-3">CEO</p>
                  <p>As co-founder, CEO and Product Architect, Elon oversees all product design, engineering and manufacturing of the company's products.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <img src="https://www.tesla.com/sites/tesla/files/zachary-kirkhorn.jpg?202211170905" className="rounded-circle" alt="CFO" />
                  </div>
                  <h4 className="fw-bold">Zachary Kirkhorn</h4>
                  <p className="text-muted mb-3">CFO</p>
                  <p>Zachary is responsible for all financial operations, including investor relations, treasury, internal audit, tax and control.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <img src="https://www.tesla.com/sites/tesla/files/jb-straubel.jpg?202211170905" className="rounded-circle" alt="CTO" />
                  </div>
                  <h4 className="fw-bold">JB Straubel</h4>
                  <p className="text-muted mb-3">CTO</p>
                  <p>JB oversees the technical design and engineering of Tesla's products, as well as the company's battery and energy systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
