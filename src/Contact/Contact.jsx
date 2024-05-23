import footerimg from "../media/footerimg.png";
import "./Contact.css";

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
        </button>
      </div>
      <div className="contact-img">
        <img src={footerimg} alt="footer-img" />
      </div>
    </div>
  );
};

export default Contact;
