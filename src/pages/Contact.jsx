import siteContent from '../data/siteContent';

function Contact() {
  return (
    <section className="page-section">
      <div className="container">
        <h2>Contact</h2>
        <p>Email: {siteContent.email}</p>
        <p>Phone: {siteContent.phone}</p>
        <p>
          A contact form or service request form can be added once final business details
          are confirmed.
        </p>
      </div>
    </section>
  );
}

export default Contact;