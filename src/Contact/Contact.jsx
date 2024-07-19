import footerimg from "../media/footerimage.png";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import CalendlySection from "./Calendly.jsx";

const Contact = () => {
  return (
    <div className="Contact-container" id="contact">
      <div className="contact-content">
        <h3>Let's Chat</h3>
        <p>I would love to learn about your project.</p>
        <CalendlySection className="Calendly" />
        {/* <div className="contact-inner">
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          </p>
          <p>
            <FontAwesomeIcon icon={faLinkedinIn} className="contact-icon" />
          </p>
           <button>
            <a
              href="https://calendly.com/laiba-sabahat9/15-min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Meeting Now!
            </a>
          </button> 
        </div> */}
      </div>
      {/* <div className="contact-img">
        <img src={footerimg} alt="footer-img" />
      </div> */}
    </div>
  );
};

export default Contact;
