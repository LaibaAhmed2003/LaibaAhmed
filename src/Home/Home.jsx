import Hero from "../Hero/Hero";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contact/Contact";
import Copy from "../copyrightfooter/Copyr";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Projects />
      {/* <Testimonial /> */}
      <Contact />
      <Copy />
    </div>
  );
};

export default Home;
