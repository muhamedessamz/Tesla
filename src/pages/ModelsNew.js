import React from 'react';

function Models() {
  return (
    <div className="py-5">
      <div className="container text-center mb-5">
        <h2 className="display-5 fw-bold mb-4">Existing Inventory</h2>
        <p className="lead">View our current inventory of new and used vehicles</p>
      </div>

      {/* Model S Section */}
      <div className="mb-5">
        <div className="container">
          <div className="row align-items-center mb-4">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold mb-3">Model S</h1>
              <p className="lead mb-4">Plaid</p>
              <div className="d-flex gap-3 mb-4">
                <div>
                  <span className="d-block fs-5">396 mi</span>
                  <small className="text-muted">Range (EPA est.)</small>
                </div>
                <div>
                  <span className="d-block fs-5">1.99 s</span>
                  <small className="text-muted">0-60 mph*</small>
                </div>
                <div>
                  <span className="d-block fs-5">200 mph</span>
                  <small className="text-muted">Top Speed</small>
                </div>
              </div>
              <div className="d-grid gap-2 d-md-flex">
                <button className="btn btn-primary btn-lg px-4">Custom Order</button>
                <button className="btn btn-outline-light btn-lg px-4">Existing Inventory</button>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="position-relative">
                <img src="https://via.placeholder.com/800x500" className="img-fluid rounded" alt="Model S" />
                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-none d-md-block">
                  <button className="btn btn-sm btn-light"><i className="bi bi-play-fill me-2"></i>Watch</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Model 3 Section */}
      <div className="mb-5">
        <div className="container">
          <div className="row align-items-center mb-4 flex-md-row-reverse">
            <div className="col-md-6 text-center">
              <div className="position-relative">
                <img src="https://via.placeholder.com/800x500" className="img-fluid rounded" alt="Model 3" />
                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-none d-md-block">
                  <button className="btn btn-sm btn-light"><i className="bi bi-play-fill me-2"></i>Watch</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h1 className="display-4 fw-bold mb-3">Model 3</h1>
              <p className="lead mb-4">The Car of the Future</p>
              <div className="d-flex gap-3 mb-4">
                <div>
                  <span className="d-block fs-5">272 mi</span>
                  <small className="text-muted">Range (EPA est.)</small>
                </div>
                <div>
                  <span className="d-block fs-5">3.1 s</span>
                  <small className="text-muted">0-60 mph*</small>
                </div>
                <div>
                  <span className="d-block fs-5">145 mph</span>
                  <small className="text-muted">Top Speed</small>
                </div>
              </div>
              <div className="d-grid gap-2 d-md-flex">
                <button className="btn btn-primary btn-lg px-4">Custom Order</button>
                <button className="btn btn-outline-light btn-lg px-4">Existing Inventory</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Model X Section */}
      <div className="mb-5">
        <div className="container">
          <div className="row align-items-center mb-4">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold mb-3">Model X</h1>
              <p className="lead mb-4">Utility and Versatility</p>
              <div className="d-flex gap-3 mb-4">
                <div>
                  <span className="d-block fs-5">326 mi</span>
                  <small className="text-muted">Range (EPA est.)</small>
                </div>
                <div>
                  <span className="d-block fs-5">3.8 s</span>
                  <small className="text-muted">0-60 mph*</small>
                </div>
                <div>
                  <span className="d-block fs-5">155 mph</span>
                  <small className="text-muted">Top Speed</small>
                </div>
              </div>
              <div className="d-grid gap-2 d-md-flex">
                <button className="btn btn-primary btn-lg px-4">Custom Order</button>
                <button className="btn btn-outline-light btn-lg px-4">Existing Inventory</button>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="position-relative">
                <img src="https://via.placeholder.com/800x500" className="img-fluid rounded" alt="Model X" />
                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-none d-md-block">
                  <button className="btn btn-sm btn-light"><i className="bi bi-play-fill me-2"></i>Watch</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Model Y Section */}
      <div className="mb-5">
        <div className="container">
          <div className="row align-items-center mb-4 flex-md-row-reverse">
            <div className="col-md-6 text-center">
              <div className="position-relative">
                <img src="https://via.placeholder.com/800x500" className="img-fluid rounded" alt="Model Y" />
                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-none d-md-block">
                  <button className="btn btn-sm btn-light"><i className="bi bi-play-fill me-2"></i>Watch</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h1 className="display-4 fw-bold mb-3">Model Y</h1>
              <p className="lead mb-4">The Utility of an SUV</p>
              <div className="d-flex gap-3 mb-4">
                <div>
                  <span className="d-block fs-5">330 mi</span>
                  <small className="text-muted">Range (EPA est.)</small>
                </div>
                <div>
                  <span className="d-block fs-5">3.5 s</span>
                  <small className="text-muted">0-60 mph*</small>
                </div>
                <div>
                  <span className="d-block fs-5">135 mph</span>
                  <small className="text-muted">Top Speed</small>
                </div>
              </div>
              <div className="d-grid gap-2 d-md-flex">
                <button className="btn btn-primary btn-lg px-4">Custom Order</button>
                <button className="btn btn-outline-light btn-lg px-4">Existing Inventory</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cybertruck Section */}
      <div className="mb-5">
        <div className="container">
          <div className="row align-items-center mb-4">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold mb-3">Cybertruck</h1>
              <p className="lead mb-4">Better Utility than a Truck with More Performance than a Sports Car</p>
              <div className="d-flex gap-3 mb-4">
                <div>
                  <span className="d-block fs-5">250+</span>
                  <small className="text-muted">mi Range</small>
                </div>
                <div>
                  <span className="d-block fs-5">0-60 mph</span>
                  <small className="text-muted">&lt; 2.9 s*</small>
                </div>
                <div>
                  <span className="d-block fs-5">~3,500 lbs</span>
                  <small className="text-muted">Payload</small>
                </div>
              </div>
              <div className="d-grid gap-2 d-md-flex">
                <button className="btn btn-primary btn-lg px-4">Custom Order</button>
                <button className="btn btn-outline-light btn-lg px-4">Learn More</button>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="position-relative">
                <img src="https://via.placeholder.com/800x500" className="img-fluid rounded" alt="Cybertruck" />
                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-none d-md-block">
                  <button className="btn btn-sm btn-light"><i className="bi bi-play-fill me-2"></i>Watch</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Models;
