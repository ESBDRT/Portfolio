import "./home.css";
import events from "../assets/projects/724events.png";
import argentbank from "../assets/projects/argentbank.png";
import monitor from "../assets/projects/monitor.png";
import portrait from "../assets/other/portrait.jpg";
import html from '../assets/logos/html5.png'
import css from '../assets/logos/css3.png'
import js from '../assets/logos/javascript.png'
import react from '../assets/logos/react.png'
import redux from '../assets/logos/redux.png'
import github from '../assets/logos/github-cat.png'
import notion from '../assets/logos/notion.png'
import figma from '../assets/logos/figma.png'
import Header from "../components/header/header";
import SkillsTools from "../components/skillsTools/skillsTools";
import Projet from "../components/projet/projet";
import Footer from "../components/footer/footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faCss3Alt,
  faHtml5,
  faJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <>
      <Header />
      <div className="project-title">
        <h1 className="project-title-h">ABOUT ME</h1>
      </div>
      <section id="ABOUT" className="section-about">
        <div class="container">
          <div class="left">
            <img src={portrait} className="portrait" alt="portrait" />
          </div>
          <div class="right">
            <p>
              22 years old Front-end developer based in Paris.
              <br />
              <br />
              Passionate about making fluid and modern interfaces.
              <br />
              <br />
              Soon Holder of a "Front-end web developer" degree
            </p>
          </div>
        </div>
      </section>
      <div className="project-title">
        <h1>SKILLS AND TOOLS</h1>
      </div>
      <section id="SKILLS" className="section-skills">
        <SkillsTools img={html} alt=""/>
        <SkillsTools img={css} alt=""/>
        <SkillsTools img={js} alt=""/>
        <SkillsTools img={react} alt=""/>
        <SkillsTools img={redux} alt=""/>
        <SkillsTools img={github} alt=""/>
        <SkillsTools img={notion} alt=""/>
        <SkillsTools img={figma} alt=""/>
      </section>
      <div className="project-title">
        <h1 className="">PROJECTS</h1>
      </div>
      <section id="PROJECTS" className="section-projet">
        <Projet
          image={argentbank}
          link="https://github.com/ESBDRT/ArgentBankV2"
          title="ARGENTBANK"
          content="Bank Application Frontend Integration"
          details={[
            "- Built with REACT for dynamic UI.",
            "- Implemented REDUX for state management.",
            "- Integrated secure API calls",
            "- Swagger routes creation",
            "- And more ...",
          ]}
          alt="argentbank-image"
        />
        <Projet
          image={events}
          link="https://github.com/ESBDRT/debugP10"
          title="724EVENTS"
          content="Debugging & Code Analysis"
          details={[
            "- Investigated and resolved critical issues in a React application using React DevTools.",
            "- Optimized performance",
            "- Reorganized the code",
            "- And more ... ",
          ]}
          alt="argentbank-image"
        />
        <Projet
          image={monitor}
          link="https://github.com/"
          title="TICKETMASTER MONITOR"
          content="Web scrapping"
          details={[
            "- Built with python for maximum efficiency",
            "- Integrated BeatifulSoup for data parsing",
            "- Integrated Proxy System",
            "- And more ...",
          ]}
          alt="argentbank-image"
        />
      </section>
      <section id="CONTACT" className="section-contact">
        <h1>CONTACT ME</h1>
        <form action="/submit-form" className="form">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" required></input>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" required></input>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
          <div className="button-div">
            <button type="submit">SEND</button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Home;