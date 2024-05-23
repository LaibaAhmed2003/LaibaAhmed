import "./About.css";
import profile from "../media/profile.jpeg";
import butter from "../media/butter.png";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="img-container">
        <img src={butter} alt="Butterfly-img" className="butter" />
        <img src={profile} alt="Profile-image" className="profilepic" />
      </div>
      <div className="text-container">
        <h2>What do I help?</h2>
        <p className="description">
          Hi! I'm Laiba Ahmed, a software engineer from Lahore, Pakistan.
          <br />
          <br />
          With 2 years of experience at places like EvolveByte, NMtechedge, and
          Livepie.
          <br />
          <br />
          I'm all about bringing your digital ideas to life!
          <br />
          <br />I build websites and digital tools that help entrepreneurs and
          people like you succeed online.
          <br></br>
          <br />
          Let's create something awesome together!
        </p>
        <div className="inner-box">
          <div className="inner-1">
            <h3>103+</h3>
            <p>Projects completed</p>
          </div>
          <div className="inner-1">
            <h3>88+</h3>
            <p>Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
