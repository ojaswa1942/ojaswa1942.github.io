import React from 'react';
import './Navigation.css'
import NamePng from '../../assets/pictures/name-black.png'
import Logo from '../../assets/pictures/OS.png';

const Navigation = () =>{
	return(
		<div className='navigation' id='navBar'>
			<nav className="db fixed dt-l w-100 border-box pa3 ph5-l">
			  <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" title="Ojaswa Sharma">
			    <img id='navLogo' src={Logo} className="dib w2 h2 br-100" alt="Ojaswa" />
			  </a>
			  <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
			    <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" id="navHome" title="Home">Home</a>
			    <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" id="navAboutMe" title="About">About Me</a>
			    <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" id="navSkills" title="Skills">Skills</a>
			    <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" id="navProjects" title="Projects">Projects</a>
			    <a className="link dim dark-gray f6 f5-l dib" id="navContact" title="Contact">Contact</a>
			  </div>
			</nav>
		</div>
		);
}

export default Navigation;