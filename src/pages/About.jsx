import { Link } from 'react-router-dom';
import siteContent from '../data/siteContent.js';

function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <p className="eyebrow">About</p>
          <h2>Building a Reliable, Independent Calibration Service</h2>
          <p className="page-hero-text">
            This page outlines the intended direction of the business and will be refined with
            final company details, background, and credentials after client review.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Our Approach</p>
            <h2>Focused on Accuracy, Consistency, and Practical Service</h2>
          </div>

          <div className="two-column two-column-balanced">
            <div>
              <p>
                {siteContent.companyName} is being developed as an independent pipette calibration
                service focused on delivering reliable support to laboratories, clinics, and technical
                environments.
              </p>
              <p>
                The goal is to provide a service experience that is clear, dependable, and aligned
                with the expectations of quality-focused organizations.
              </p>
            </div>

            <div className="feature-panel">
              <ul className="feature-list">
                <li>ISO 8655-aligned service approach</li>
                <li>Focus on accuracy and repeatability</li>
                <li>Support for both on-site and mail-in workflows</li>
                <li>Positioned for long-term business growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section alt-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">The Operator</p>
            <h2>Built Around a Specialist Service Model</h2>
            <p>
              Final operator details, experience, and certifications will be added after client input.
              This section is intended to establish a clear and credible presentation of the individual
              behind the service.
            </p>
          </div>

          <div className="operator-layout">
            <div className="operator-placeholder">
              <div className="operator-image-placeholder">
                <span>Operator Image</span>
              </div>
            </div>

            <div className="operator-content">
              <p>
                This business is expected to be led by an experienced calibration professional with
                direct, hands-on involvement in service delivery.
              </p>
              <p>
                Unlike larger providers where customers interact with multiple departments,
                this model is built around direct communication and accountability.
              </p>

              <ul className="feature-list">
                <li>Direct interaction with the service provider</li>
                <li>Consistent handling of equipment and documentation</li>
                <li>Flexible support based on customer needs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Why This Business</p>
            <h2>A Different Approach from Larger Service Providers</h2>
          </div>

          <div className="two-column two-column-balanced">
            <div>
              <p>
                Many calibration providers operate at scale, which can create distance between the
                customer and the actual service work being performed.
              </p>
              <p>
                This business is designed to offer a more direct and responsive alternative,
                where communication, accountability, and service quality are more tightly aligned.
              </p>
            </div>

            <div className="feature-panel">
              <ul className="feature-list">
                <li>Clear and direct communication</li>
                <li>Less overhead compared to large providers</li>
                <li>More flexibility in scheduling and service approach</li>
                <li>Focused attention on each customer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section alt-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Standards and Direction</p>
            <h2>Positioned for Professional Growth and Certification</h2>
          </div>

          <div className="two-column two-column-balanced">
            <div>
              <p>
                The business is being developed with a focus on aligning service practices with
                recognized standards such as ISO 8655.
              </p>
              <p>
                Formal certification is currently in progress and is expected to be completed
                as the business continues to develop.
              </p>
            </div>

            <div className="feature-panel">
              <ul className="feature-list">
                <li>ISO-aligned service approach</li>
                <li>Documentation-focused workflow</li>
                <li>Support for regulated environments</li>
                <li>Status: {siteContent.certificationStatus}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box">
          <div>
            <p className="section-kicker">Get in Touch</p>
            <h2>Interested in Working Together?</h2>
            <p>
              This demo site is designed to show the direction of the business. Final company details,
              branding, and contact information will be confirmed with the client.
            </p>
          </div>

          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">Contact the Business</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;