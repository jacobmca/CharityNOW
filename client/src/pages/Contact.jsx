import ContactForm from "../components/Contact";
// our Contact page
const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-form-section">
          <div className="card-style">
            <div className="contact-title">
              <h1 className="contact-h1">Contact</h1>
              <i className="contact-description">We'd love to hear from you!</i>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <div className="contact-image-section">
              <img src="../../../public/charity.webp" alt="guy on the phone" className="contact-image"></img>
        </div>
    </div>
  );
};
export default ContactPage;
