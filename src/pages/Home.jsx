import { Link } from 'react-router-dom';
import siteContent from '../data/siteContent.js';
import heroImage from '../assets/images/hero-lab.jpg';

function Home() {
  return (
    <>
      <section className="hero hero-split">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Independent Pipette Calibration Specialist</p>
            <h2>Precision Pipette Calibration for Labs That Need Confidence in Every Measurement</h2>
            <p className="hero-text">
              Professional calibration and maintenance support for laboratories, clinics,
              and technical teams that rely on accurate pipette performance.
            </p>

            <div className="hero-details">
              <p><strong>Service Area:</strong> {siteContent.serviceArea}</p>
              <p><strong>Service Options:</strong> On-site support and mail-in service options</p>
              <p><strong>Status:</strong> {siteContent.certificationStatus}</p>
            </div>

            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Request Service</Link>
              <Link to="/services" className="btn btn-secondary">Explore Services</Link>
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-image-frame">
              <img
                src={heroImage}
                alt="Laboratory pipette calibration related workspace"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container trust-bar-grid">
          <div className="trust-pill">ISO 8655-Aligned Approach</div>
          <div className="trust-pill">On-Site and Mail-In Options</div>
          <div className="trust-pill">Independent Specialist Service</div>
          <div className="trust-pill">Audit-Ready Support Focus</div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Core Services</p>
            <h2>Support Designed Around Accuracy, Reliability, and Practical Lab Needs</h2>
            <p>
              This initial demo highlights the main services expected for launch.
              Final wording, service packages, and details will be refined after client review.
            </p>
          </div>

          <div className="card-grid">
            <article className="info-card service-card">
              <div className="card-number">01</div>
              <h3>Pipette Calibration</h3>
              <p>
                Verify pipette performance and support confidence in measurement accuracy
                with routine calibration service.
              </p>
            </article>

            <article className="info-card service-card">
              <div className="card-number">02</div>
              <h3>Preventive Maintenance</h3>
              <p>
                Help reduce avoidable issues and maintain dependable day-to-day performance
                through proactive equipment care.
              </p>
            </article>

            <article className="info-card service-card">
              <div className="card-number">03</div>
              <h3>Repair Support</h3>
              <p>
                Address common performance and usability issues that can interrupt workflow
                and compromise reliability.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-section alt-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">How It Works</p>
            <h2>A Flexible Service Model for Different Lab Needs</h2>
          </div>

          <div className="process-grid">
            <article className="process-step">
              <div className="process-step-number">1</div>
              <h3>Request Service</h3>
              <p>
                Labs can begin with a contact request, service inquiry, or discussion
                about current calibration needs.
              </p>
            </article>

            <article className="process-step">
              <div className="process-step-number">2</div>
              <h3>Choose the Best Service Path</h3>
              <p>
                Depending on location, volume, and timing, work can be planned as on-site
                support or mail-in service.
              </p>
            </article>

            <article className="process-step">
              <div className="process-step-number">3</div>
              <h3>Receive Documentation and Follow-Up</h3>
              <p>
                Service results and documentation help support internal records,
                quality expectations, and future scheduling.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Why Choose an Independent Specialist</p>
            <h2>Direct Communication, Flexible Support, and a More Personal Service Experience</h2>
          </div>

          <div className="two-column two-column-balanced">
            <div>
              <p>
                Large providers often route customers through layers of sales and service coordination.
                An independent specialist can offer clearer communication, faster adjustments,
                and a more direct working relationship.
              </p>
              <p>
                That approach is especially valuable for labs that want dependable support
                without feeling like just another account in a large system.
              </p>
            </div>

            <div className="feature-panel">
              <ul className="feature-list">
                <li>Direct communication with the service provider</li>
                <li>Flexible support model for on-site and mail-in work</li>
                <li>Professional presentation for technical and regulated environments</li>
                <li>Foundation for future business and software expansion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box">
          <div>
            <p className="section-kicker">Get Started</p>
            <h2>Build a More Reliable Calibration Process</h2>
            <p>
              This demo site is intended to show the direction of a growing pipette calibration business.
              Final branding, service area, and contact details will be confirmed with the client.
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

export default Home;