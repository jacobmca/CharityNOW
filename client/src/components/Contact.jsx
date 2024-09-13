const ContactForm = () => {
    return (
        <form className="contact-form">
            <input className="contact-input-basic" type="text" placeholder="Name" />
            <input className="contact-input-basic" type="email" placeholder="Email" />
            <textarea className="contact-text-area" placeholder="Message"></textarea>
            <button className="contact-submit-button" type="submit">Submit</button>
        </form>
    );
};
export default ContactForm;