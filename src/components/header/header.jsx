import './header.css';
import { HashLink } from 'react-router-hash-link';

function Header() {
  return (
    <header className="top-header" id="HOME">
      <h1 className="name">Esteban Drouet</h1>
      <nav className="nav">
        <ul>
          <li className="li">
            <HashLink to="#HOME">HOME</HashLink>
          </li>
          <li className="li">
            <HashLink to="#ABOUT">ABOUT</HashLink>
          </li>
          <li className="li">
            <HashLink to="#SKILLS">SKILLS</HashLink>
          </li>
          <li className="li">
            <HashLink to="#PROJECTS">PROJECTS</HashLink>
          </li>
          <li className="li">
            <HashLink to="#CONTACT">CONTACT</HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
