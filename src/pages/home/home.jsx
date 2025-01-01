import './home.css'
import events from "../../assets/projects/724events.webp";
import argentbank from "../../assets/projects/argentbank.webp";
import monitor from "../../assets/projects/monitor.webp";
import portrait from "../../assets/other/portrait.png";
import html from '../../assets/logos/html5.png'
import css from '../../assets/logos/css3.png'
import js from '../../assets/logos/javascript.png'
import react from '../../assets/logos/react.png'
import redux from '../../assets/logos/redux.png'
import github from '../../assets/logos/github-cat.png'
import notion from '../../assets/logos/notion.png'
import figma from '../../assets/logos/figma.png'
import Header from "../../components/header/header";
import SkillsTools from "../../components/skillsTools/skillsTools";
import Projet from "../../components/projet/projet";
import Footer from "../../components/footer/footer";
import ContactMe from "../../components/form/form";

function Home() {
  return (
    <>
      <Header />
      <main>
      <div className="project-title">
        <h2 className="project-title-h">ABOUT ME</h2>
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
        <h2>SKILLS AND TOOLS</h2>
      </div>
      <section id="SKILLS" className="section-skills">
        <SkillsTools img={html} alt="html card"/>
        <SkillsTools img={css} alt="css card"/>
        <SkillsTools img={js} alt="js card"/>
        <SkillsTools img={react} alt="react card"/>
        <SkillsTools img={redux} alt="redux card"/>
        <SkillsTools img={github} alt="github card"/>
        <SkillsTools img={notion} alt="notion card"/>
        <SkillsTools img={figma} alt="figma card"/>
      </section>
      <div className="project-title">
        <h2 className="">PROJECTS</h2>
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
        <h2>CONTACT ME</h2>
        <ContactMe/>
      </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;