import profile from "../media/profile.jpeg";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faFigma,
  faNodeJs,
  faWordpressSimple,
  faSquarespace,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="image-container">
          <img src={profile} alt="profile-image" className="prof-img" />
        </div>
        <div className="main-heading">
          <h1 className="hero-headline">
            <span className="span">I'm Laiba Ahmed,</span> web <br /> developer
            based in Pakistan.
          </h1>
        </div>
        <div className="text-p">
          I'm a full stack developer from Lahore, Pakistan with 2 years of
          experience in multiple <br /> companies like EvolveByte, NMtechedge
          and Livepie.
        </div>
        <div className="hero-btns">
          <button className="connectbtn">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="link"
            >
              Connect With Me
            </Link>
          </button>
          <button className="resumebtn">My resume</button>
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faReact} className="react-icon" />
          <FontAwesomeIcon icon={faFigma} className="figma-icon" />
          <FontAwesomeIcon icon={faNodeJs} className="node-icon" />
          <FontAwesomeIcon
            icon={faWordpressSimple}
            className="wordpress-icon"
          />
          <FontAwesomeIcon icon={faSquarespace} className="square-icon" />
        </div>
      </div>
      <div className="downcircle">
        <div className="innercircle">
          <FontAwesomeIcon icon={faArrowDown} className="arrow" />
        </div>
      </div>
    </>
  );
};
export default Hero;
