import './header.css'

function Header() {
    return (
        <header class="top-header" id='HOME'>
			<h1 class="name">Esteban Drouet</h1>
			<nav class="nav">
				<ul>
					<li className='li'><a href="#HOME">HOME</a></li>
					<li className='li'><a href="#ABOUT">ABOUT</a></li>
					<li className='li'><a href="#SKILLS">SKILLS</a></li>
					<li className='li'><a href="#PROJECTS">PROJECTS</a></li>
					<li className='li'><a href="#CONTACT">CONTACT</a></li>
				</ul>
			</nav>
		</header>
    )
}

export default Header;