import siteContent from '../data/siteContent';

function About() {
  return (
    <section className="page-section">
      <div className="container">
        <h2>About</h2>
        <p>
          {siteContent.companyName} is being built as an independent pipette calibration
          service focused on reliable support, accurate measurement, and strong customer service.
        </p>
        <p>
          Final business background, credentials, and company story will be added after client review.
        </p>
      </div>
    </section>
  );
}

export default About;