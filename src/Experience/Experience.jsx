import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="Experience-container" id="experience">
      <h2>Experience</h2>
      <div className="inner-exp">
        <div className="exp">
          <h3>Frontend Development</h3>
          <div className="languages">
            <div className="lang">
              <div className="icon">
                <FontAwesomeIcon icon={faCircleCheck} className="circle" />
              </div>
              <div className="name">
                <h4>HTML</h4>
                <p>Experienced</p>
              </div>
            </div>

            <div className="lang">
              <div className="icon">
                <FontAwesomeIcon icon={faCircleCheck} className="circle" />
              </div>
              <div className="name">
                <h4>CSS</h4>
                <p>Experienced</p>
              </div>
            </div>
            <div className="lang">
              <div className="icon">
                <FontAwesomeIcon icon={faCircleCheck} className="circle" />
              </div>
              <div className="name">
                <h4>JavaScript</h4>
                <p>Experienced</p>
              </div>
            </div>
            <div className="lang">
              <div className="icon">
                <FontAwesomeIcon icon={faCircleCheck} className="circle" />
              </div>
              <div className="name">
                <h4>React Js</h4>
                <p>Experienced</p>
              </div>
            </div>
            <div className="lang">
              <div className="icon">
                <FontAwesomeIcon icon={faCircleCheck} className="circle" />
              </div>
              <div className="name">
                <h4>Next JS</h4>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="lang">
              <div className="icon">
                <FontAwesomeIcon icon={faCircleCheck} className="circle" />
              </div>
              <div className="name">
                <h4>Vue Js</h4>
                <p>Intermediate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="exp">
          <h3>CMS(Content Management System)</h3>
          <div className="languages">
            <div className="lang">
              <div className="icon">
                <FontAwesomeIcon icon={faCircleCheck} className="circle" />
              </div>
              <div className="name">
                <h4>WordPress</h4>
                <p>Experienced</p>
              </div>
            </div>

            <div className="lang">
              <div className="icon">
                <FontAwesomeIcon icon={faCircleCheck} className="circle" />
              </div>
              <div className="name">
                <h4>Wix</h4>
                <p>Experienced</p>
              </div>
            </div>
            <div className="lang">
              <div className="icon">
                <FontAwesomeIcon icon={faCircleCheck} className="circle" />
              </div>
              <div className="name">
                <h4>Webflow</h4>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="lang">
              <div className="icon">
                <FontAwesomeIcon icon={faCircleCheck} className="circle" />
              </div>
              <div className="name">
                <h4>Squarespace</h4>
                <p>Experienced</p>
              </div>
            </div>
            <div className="lang">
              <div className="icon">
                <FontAwesomeIcon icon={faCircleCheck} className="circle" />
              </div>
              <div className="name">
                <h4>Shopify</h4>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="lang">
              <div className="icon">
                <FontAwesomeIcon icon={faCircleCheck} className="circle" />
              </div>
              <div className="name">
                <h4>Drupal</h4>
                <p>Intermediate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
