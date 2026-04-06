import { Link } from 'react-router-dom';
import siteContent from '../data/siteContent.js';

function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <p className="eyebrow">Services</p>
          <h2>Calibration Support Built Around Real Lab Needs</h2>
          <p className="page-hero-text">
            This page outlines the expected core services of the business, along with the
            flexible service paths customers may use depending on location, volume, and workflow.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Core Services</p>
            <h2>Expected Service Offerings for Launch</h2>
            <p>
              The business is expected to provide calibration, preventive maintenance, and
              repair-related support for pipettes used in laboratory and technical environments.
            </p>
          </div>

          <div className="card-grid">
            <article className="info-card service-card">
              <div className="card-number">01</div>
              <h3>Pipette Calibration</h3>
              <p>
                Calibration support intended to verify pipette performance and help laboratories
                maintain confidence in measurement accuracy.
              </p>
            </article>

            <article className="info-card service-card">
              <div className="card-number">02</div>
              <h3>Preventive Maintenance</h3>
              <p>
                Routine maintenance and inspection services designed to reduce avoidable issues
                and support dependable day-to-day use.
              </p>
            </article>

            <article className="info-card service-card">
              <div className="card-number">03</div>
              <h3>Repair Support</h3>
              <p>
                Service support for pipettes with wear, performance, or usability issues that
                interfere with normal workflow.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-section alt-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Service Model</p>
            <h2>Support Options for Different Customers</h2>
            <p>
              This business is expected to serve customers through both on-site and mail-in
              service models. Final logistics, scheduling details, and service area boundaries
              are still to be confirmed.
            </p>
          </div>

          <div className="service-model-grid">
            <div className="service-model-column">
              <p className="service-model-label">On-Site Service</p>
              <h3>Best for Labs That Need Service at Their Location</h3>
              <p>
                On-site support may be the right fit for laboratories with multiple pipettes,
                scheduling constraints, or internal workflows that make shipping less practical.
              </p>
              <ul className="feature-list">
                <li>Convenient for larger equipment counts</li>
                <li>Reduces shipping and handling coordination</li>
                <li>Supports direct scheduling and in-person service discussion</li>
              </ul>
            </div>

            <div className="service-model-column">
              <p className="service-model-label">Mail-In Service</p>
              <h3>Best for Flexible or Broader Geographic Support</h3>
              <p>
                Mail-in service may be a better option for customers outside the main travel area
                or for labs that prefer to ship equipment for service and documentation.
              </p>
              <ul className="feature-list">
                <li>Supports customers outside the immediate local area</li>
                <li>Useful for labs with smaller service volume</li>
                <li>Can offer a practical path when travel is not the best fit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">What to Expect</p>
            <h2>A Straightforward Service Process</h2>
            <p>
              The exact workflow will be refined with the client, but the expected customer
              experience follows a clear step-by-step path.
            </p>
          </div>

          <div className="process-list">
            <article className="process-row">
              <div className="process-row-number">01</div>
              <div className="process-row-content">
                <h3>Initial Request</h3>
                <p>
                  Customers begin by reaching out with service needs, equipment count, and timing
                  considerations.
                </p>
              </div>
            </article>

            <article className="process-row">
              <div className="process-row-number">02</div>
              <div className="process-row-content">
                <h3>Service Planning</h3>
                <p>
                  The best service path is determined based on location, volume, schedule, and
                  whether on-site or mail-in support is the better fit.
                </p>
              </div>
            </article>

            <article className="process-row">
              <div className="process-row-number">03</div>
              <div className="process-row-content">
                <h3>Calibration and Support</h3>
                <p>
                  Equipment is serviced according to the chosen workflow, with attention to
                  professional handling, accuracy, and reliability.
                </p>
              </div>
            </article>

            <article className="process-row">
              <div className="process-row-number">04</div>
              <div className="process-row-content">
                <h3>Documentation and Follow-Up</h3>
                <p>
                  Records and service results help support internal quality expectations,
                  scheduling awareness, and future planning.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="home-section alt-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Documentation and Standards</p>
            <h2>Professional Service Expectations for Quality-Focused Environments</h2>
          </div>

          <div className="two-column two-column-balanced">
            <div>
              <p>
                Laboratories and technical organizations often need more than basic service.
                They need confidence that calibration work is being performed carefully,
                documented properly, and aligned with recognized standards.
              </p>
              <p>
                This business is being positioned around an ISO 8655-aligned service approach,
                with certification currently in progress.
              </p>
            </div>

            <div className="feature-panel">
              <ul className="feature-list">
                <li>ISO-aligned service positioning</li>
                <li>Professional documentation expectations</li>
                <li>Support for regulated or quality-focused environments</li>
                <li>Status: {siteContent.certificationStatus}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box">
          <div>
            <p className="section-kicker">Next Step</p>
            <h2>Need a Service Model That Fits Your Lab?</h2>
            <p>
              This demo is intended to show the expected direction of the business. Final service
              details, geographic coverage, and workflow specifics will be finalized after client review.
            </p>
          </div>

          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">Request More Information</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;