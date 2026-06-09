import './Contact.css';

function Contact() {
  return (
    <main className="page-contact">
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with our team.</p>
        </div>
      </section>

      <section className="container contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <h3>Phone</h3>
            <p>1-800-555-1234</p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p>info@plancanada.ca</p>
          </div>
          <div className="contact-item">
            <h3>Address</h3>
            <p>245 Eglinton Avenue East, Suite 300<br/>Toronto, ON M4P 3B7<br/>Canada</p>
          </div>
        </div>

        <form className="contact-form">
          <h2>Send us a message</h2>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your message"></textarea>
          </div>
          <button type="submit" className="btn btn-donate-lg">Send Message</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
