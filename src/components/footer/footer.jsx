import './footer.css'
import github from '../../assets/logos/github-mark-white.png'
import linkedin from '../../assets/logos/linkedin.png'
import { HashLink } from 'react-router-hash-link';

function Footer() {
    return (
        <footer className='footer'>
            <div className='logos-list'>
                <a href="https://github.com/ESBDRT" target='blank'><img src={github} className="logo" alt="githubLogo" loading='lazy'/></a>
                <a href="https://www.linkedin.com/in/esteban-drouet-33b86927b/" target='blank'><img src={linkedin} className="logo" alt="linkedinLogo" loading='lazy'/></a>
            </div>
            <div className='footer'>
			<nav class="nav">
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
		</div>
        </footer>
    )
}

export default Footer;