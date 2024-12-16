import "./projet.css";
import githubNameLogo from '../../assets/logos/GitHub_Logo.png'

function Projet({ title, content, details, image, alt, link }) {
  return (
    <div>
      <article className="project-container">
        <img src={image} className="image" alt={alt} />
        <div className="project-text">
          <h3>{title}</h3>
          <h4 className="content">{content}</h4>
          <ul className="details">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          <a href={link} target="blank"><img src={githubNameLogo} className="github" alt="github name logo" /></a>
        </div>
      </article>
    </div>
  );
}

export default Projet;
