import './footer.css'
import github from '../../assets/logos/github-mark-white.png'
import linkedin from '../../assets/logos/linkedin.png'
import twitter from '../../assets/logos/twitter.png'
import instagram from '../../assets/logos/instagram.png'

function Footer() {
    return (
        <div className='footer'>
            <div className='logos-list'>
                <a href="https://github.com/ESBDRT" target='blank'><img src={github} className="logo" alt="githubLogo" loading='lazy'/></a>
                <a href="https://www.linkedin.com/in/esteban-drouet-33b86927b/" target='blank'><img src={linkedin} className="logo" alt="linkedinLogo" loading='lazy'/></a>
                <a href="https://www.instagram.com/" target='blank'><img src={twitter} className="logo" alt="instagramLogo" loading='lazy' /></a>
                <a href="https://x.com/home" target='blank'><img src={instagram} className="logo" alt="twitterLogo" loading='lazy' /></a>
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
        </div>
    )
}

export default Footer;