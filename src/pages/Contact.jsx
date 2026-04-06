import siteContent from '../data/siteContent.js';

function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <p className="eyebrow">Contact</p>
          <h2>Start the Conversation About Your Calibration Needs</h2>
          <p className="page-hero-text">
            This page is designed to support future customer inquiries, service requests,
            and general business contact once final branding, domain, and communication
            details are confirmed.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Contact Information</p>
            <h2>Planned Business Contact Channels</h2>
            <p>
              Final phone, email, and domain details will be confirmed with the client before launch.
            </p>
          </div>

          <div className="contact-info-grid">
            <article className="contact-info-card">
              <h3>Email</h3>
              <p>{siteContent.email}</p>
              <p className="contact-note">Business email address to be finalized with domain setup.</p>
            </article>

            <article className="contact-info-card">
              <h3>Phone</h3>
              <p>{siteContent.phone}</p>
              <p className="contact-note">Business phone number to be confirmed.</p>
            </article>

            <article className="contact-info-card">
              <h3>Service Area</h3>
              <p>{siteContent.serviceArea}</p>
              <p className="contact-note">Geographic coverage still to be finalized.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-section alt-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Service Request Form</p>
            <h2>Planned Inquiry Form for Future Customer Use</h2>
            <p>
              This demo form is visual only for now. In the launch-ready version, it can be
              connected to a business email address and expanded later with additional workflow options.
            </p>
          </div>

          <div className="contact-form-layout">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row two-up">
                <div className="form-field">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" type="text" placeholder="Your name" />
                </div>

                <div className="form-field">
                  <label htmlFor="organization">Organization / Lab Name</label>
                  <input id="organization" type="text" placeholder="Company or lab name" />
                </div>
              </div>

              <div className="form-row two-up">
                <div className="form-field">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" type="email" placeholder="you@example.com" />
                </div>

                <div className="form-field">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" type="tel" placeholder="(555) 555-5555" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="serviceType">Service Type</label>
                  <select id="serviceType" defaultValue="">
                    <option value="" disabled>Select a service type</option>
                    <option>Pipette Calibration</option>
                    <option>Preventive Maintenance</option>
                    <option>Repair Support</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="details">Project / Service Details</label>
                  <textarea
                    id="details"
                    rows="6"
                    placeholder="Tell us about your calibration needs, approximate quantity, location, and preferred timing."
                  ></textarea>
                </div>
              </div>

              <div className="form-row">
                <button type="submit" className="btn btn-primary">Submit Request</button>
              </div>
            </form>

            <aside className="contact-side-panel">
              <h3>What customers should include</h3>
              <ul className="feature-list">
                <li>Type of service needed</li>
                <li>Approximate number of pipettes</li>
                <li>Preferred timing or deadline</li>
                <li>Whether on-site or mail-in service is preferred</li>
                <li>Location or shipping considerations</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Client Implementation Note</p>
            <h2>How This Form Is Intended to Work After Launch</h2>
          </div>

          <div className="client-note-panel">
            <p>
              This form is currently a visual placeholder for presentation purposes only.
              In the launch-ready version, form submissions can be configured to send inquiry
              details directly to the business email address associated with the final domain.
            </p>
            <p>
              Example implementation target: <strong>contact@[final-domain].com</strong>
              {' '}or the finalized branded domain/email selected by the client.
            </p>
            <p>
              This page can later be expanded to support more advanced features such as structured
              quote requests, appointment intake, equipment count details, file uploads, or CRM integration.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box">
          <div>
            <p className="section-kicker">Future Expansion</p>
            <h2>Built to Grow with the Business</h2>
            <p>
              This contact page is intentionally designed as a starting point. Once branding,
              domain, and workflow decisions are finalized, it can be upgraded into a live
              intake system for real customer inquiries.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;