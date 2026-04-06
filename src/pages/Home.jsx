import siteContent from '../data/siteContent';

function Home() {
  return (
    <section className="page-section">
      <div className="container">
        <h2>Precision Pipette Calibration You Can Trust</h2>
        <p>{siteContent.tagline}</p>
        <p>
          Professional pipette calibration and maintenance services designed to support
          accuracy, consistency, and confidence in laboratory work.
        </p>
        <p>
          Serving: {siteContent.serviceArea}
        </p>
      </div>
    </section>
  );
}

export default Home;