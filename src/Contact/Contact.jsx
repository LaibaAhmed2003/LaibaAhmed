import footerimg from "../media/footerimage.png";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faFigma } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="Contact-container" id="contact">
      <div className="contact-content">
        <h3>Contact Me</h3>
        <p>Contact me via email: laiba.sabahat9@gmail.com</p>
        <button>
          <a href="https://calendly.com/laiba-sabahat9/15-min" target="_blank">
            {" "}
            Book Meeting Now!
          </a>
          {/* <FontAwesomeIcon icon={faReact} className="react-icon" /> */}
        </button>
      </div>
      <div className="contact-img">
        <img src={footerimg} alt="footer-img" />
        <div className="icons">
          {/* <FontAwesomeIcon icon={faReact} className="react-icon" /> */}
          <FontAwesomeIcon icon={faFigma} className="figma-icon" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
