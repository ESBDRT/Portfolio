import './footer.css'
import github from '../../assets/logos/github-mark-white.png'
import linkedin from '../../assets/logos/linkedin.png'

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
					<li className='li'><a href="#HOME">HOME</a></li>
					<li className='li'><a href="#ABOUT">ABOUT</a></li>
                    <li className='li'><a href="#SKILLS">SKILLS</a></li>
					<li className='li'><a href="#PROJECTS">PROJECTS</a></li>
					<li className='li'><a href="#CONTACT">CONTACT</a></li>
				</ul>
			</nav>
		</div>
        </footer>
    )
}

export default Footer;