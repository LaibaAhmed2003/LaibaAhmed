import "./Contact.css";
import CalendlySection from "./Calendly.jsx";

const Contact = () => {
  return (
    <div className="Contact-container" id="contact">
      <div className="contact-content">
        <h3>Let's Chat</h3>
        <p>I would love to learn about your project.</p>
        <CalendlySection className="Calendly" />
      </div>
    </div>
  );
};

export default Contact;
