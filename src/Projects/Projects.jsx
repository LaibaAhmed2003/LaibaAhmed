import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faFigma,
  faNodeJs,
  faGithub,
  faWordpressSimple,
  faSquarespace,
} from "@fortawesome/free-brands-svg-icons";
import Laura from "../media/lauraimg.png";
import UBX from "../media/UBX.png";
import Nalu from "../media/Nalu.png";
import EvolveByte from "../media/Evolvebyte.png";
import Neha from "../media/Nehamenahil.png";
import Nmtechedge from "../media/Nmtechedge.png";
import michelle from "../media/michelle.png";
import Stellar from "../media/Stellar.png";
import thrive from "../media/thrive.png";
const Projects = () => {
  return (
    <div className="Project-container" id="portfolio">
      <h2>My Projects</h2>
      <div className="project-inner-con">
        <div className="project1">
          <img src={Laura} alt="Laura Enzor" />

          <a
            href="https://www.lauraenzor.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>lauraenzor.com</h4>
          </a>
          <p>Coaching by Laura Enzor</p>
          <div className="skills-git">
            <div className="part1">
              {/* <FontAwesomeIcon icon={faReact} className="fontawesome" /> */}
              <FontAwesomeIcon icon={faFigma} className="fontawesome" />
              <FontAwesomeIcon icon={faSquarespace} className="fontawesome" />
            </div>
            <div className="part2">
              <FontAwesomeIcon icon={faGithub} className="fontawesome" />
            </div>
          </div>
        </div>

        <div className="project1">
          <img src={UBX} alt="" />
          <a
            href="https://ubxtraining.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>ubxtraining.com</h4>
          </a>
          <p>(Boxing + Strength)</p>
          <div className="skills-git">
            <div className="part1">
              <FontAwesomeIcon icon={faReact} className="fontawesome" />
              <FontAwesomeIcon icon={faFigma} className="fontawesome" />
              <FontAwesomeIcon icon={faNodeJs} className="fontawesome" />
            </div>
            <div className="part2">
              <FontAwesomeIcon icon={faGithub} className="fontawesome" />
            </div>
          </div>
        </div>

        <div className="project1">
          <img src={Nalu} alt="" />
          <a
            href="https://www.nalubreathwork.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>Nalu Breathwork</h4>
          </a>

          <p>Jennifer Barnett</p>
          <div className="skills-git">
            <div className="part1">
              <FontAwesomeIcon icon={faReact} className="fontawesome" />
              <FontAwesomeIcon icon={faFigma} className="fontawesome" />
              <FontAwesomeIcon icon={faNodeJs} className="fontawesome" />
            </div>
            <div className="part2">
              <FontAwesomeIcon icon={faGithub} className="fontawesome" />
            </div>
          </div>
        </div>
      </div>
      <div className="project-inner-con">
        <div className="project1">
          <img src={EvolveByte} alt="" />
          <a
            href="https://evolvebyte.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>evolvebyte.com</h4>
          </a>
          <p>Web services Agency</p>
          <div className="skills-git">
            <div className="part1">
              <FontAwesomeIcon icon={faReact} className="fontawesome" />
              <FontAwesomeIcon icon={faFigma} className="fontawesome" />
              <FontAwesomeIcon icon={faNodeJs} className="fontawesome" />
            </div>
            <div className="part2">
              <FontAwesomeIcon icon={faGithub} className="fontawesome" />
            </div>
          </div>
        </div>

        <div className="project1">
          <img src={Neha} alt="" />
          <a
            href="https://nehamenahil.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>nehamenahil.com</h4>
          </a>
          <p>Portfolio Website</p>
          <div className="skills-git">
            <div className="part1">
              {/* <FontAwesomeIcon icon={faReact} className="fontawesome" /> */}
              <FontAwesomeIcon icon={faFigma} className="fontawesome" />
              <FontAwesomeIcon
                icon={faWordpressSimple}
                className="fontawesome"
              />
            </div>
            <div className="part2">
              <FontAwesomeIcon icon={faGithub} className="fontawesome" />
            </div>
          </div>
        </div>

        <div className="project1">
          <img src={Nmtechedge} alt="" />
          <a
            href="https://NmTechedge.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>NmTechedge.com</h4>
          </a>
          <p>Latest Blog Website</p>
          <div className="skills-git">
            <div className="part1">
              <FontAwesomeIcon icon={faReact} className="fontawesome" />
              <FontAwesomeIcon icon={faFigma} className="fontawesome" />
              {/* <FontAwesomeIcon icon={faNodeJs} className="fontawesome" /> */}
              <FontAwesomeIcon
                icon={faWordpressSimple}
                className="fontawesome"
              />
            </div>
            <div className="part2">
              <FontAwesomeIcon icon={faGithub} className="fontawesome" />
            </div>
          </div>
        </div>
      </div>
      <div className="project-inner-con">
        <div className="project1">
          <img src={michelle} alt="" />
          <a
            href="https://michelleflynncoaching.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>michelleflynncoaching.com</h4>
          </a>
          <p>Mindset & Health Coach</p>
          <div className="skills-git">
            <div className="part1">
              <FontAwesomeIcon icon={faReact} className="fontawesome" />
              <FontAwesomeIcon icon={faFigma} className="fontawesome" />
              <FontAwesomeIcon icon={faNodeJs} className="fontawesome" />
            </div>
            <div className="part2">
              <FontAwesomeIcon icon={faGithub} className="fontawesome" />
            </div>
          </div>
        </div>

        <div className="project1">
          <img src={Stellar} alt="" />
          <a
            href="https://stellarimpact.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>stellarimpact.co.uk</h4>
          </a>
          <p>Career Coach</p>
          <div className="skills-git">
            <div className="part1">
              <FontAwesomeIcon icon={faReact} className="fontawesome" />
              <FontAwesomeIcon icon={faFigma} className="fontawesome" />
              <FontAwesomeIcon icon={faNodeJs} className="fontawesome" />
            </div>
            <div className="part2">
              <FontAwesomeIcon icon={faGithub} className="fontawesome" />
            </div>
          </div>
        </div>

        <div className="project1">
          <img src={thrive} alt="" />
          <a
            href="https://thrivenowcoachingacademy.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="thrive">thrivenowcoachingacademy.com</h4>
          </a>
          <p>Thrive now Coaching Academy</p>
          <div className="skills-git">
            <div className="part1">
              <FontAwesomeIcon icon={faReact} className="fontawesome" />
              <FontAwesomeIcon icon={faFigma} className="fontawesome" />
              <FontAwesomeIcon icon={faNodeJs} className="fontawesome" />
            </div>
            <div className="part2">
              <FontAwesomeIcon icon={faGithub} className="fontawesome" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
