import ContactForm from "../components/Contact";
// our Contact page
const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-title">
        <h1 className="contact-h1">Contact</h1>
        <i className="contact-description">We'd love to hear from you!</i>
        <ContactForm />
      </div>
      
    </div>
  );
};
export default ContactPage;
