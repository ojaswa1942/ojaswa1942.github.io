import React from 'react';
import './Navigation.css';
import Logo from '../../assets/pictures/OS.png';
import Home from '../../assets/pictures/home.svg';
import Monitor from '../../assets/pictures/monitor.svg';
import Phone from '../../assets/pictures/phone.svg';
import User from '../../assets/pictures/user.svg';
import Code from '../../assets/pictures/code.svg';

const Navigation = () =>{
	return(
		<div className='navigation'>
			<nav id="navBar" className="db dt-l w-100 border-box pa2 ph5-l animated ">
			  <a className="w-100 w-25-l db dtc-l v-mid mid-gray link dim tc tl-l mb0 mb1-ns mb2-m mb0-l" title="Ojaswa Sharma">
			    <img id='navLogo' src={Logo} className="dib w2 h2 br-100" alt="Ojaswa" />
			  </a>
			  <div className="w-100 w-75-l db dtc-l v-mid tc tr-l" id="entries">
			    <a className="w-20 ph3 w-auto-ns link dim dark-gray f6 f5-l dib mr3-ns mr4-l" id="navHome" title="Home"><img src={Home} alt="" />Home&nbsp;</a>
			    <a className="w-20 ph3 w-auto-ns link dim dark-gray f6 f5-l dib mr3-ns mr4-l" id="navAboutMe" title="About"><img src={User} alt="" />About&nbsp;</a>
			    <a className="w-20 ph3 w-auto-ns link dim dark-gray f6 f5-l dib mr3-ns mr4-l" id="navProjects" title="Projects"><img src={Monitor} alt="" />Projects</a>		
			    <a className="w-20 ph3 w-auto-ns link dim dark-gray f6 f5-l dib mr3-ns mr4-l" id="navSkills" title="Skills"><img src={Code} alt="" />Skills&nbsp;&nbsp;</a>
			    <a className="w-20 ph3 w-auto-ns link dim dark-gray f6 f5-l dib mr3-ns mr4-1" id="navContact" title="Contact"><img src={Phone} alt="" />Contact</a>
			  </div>
			</nav>
		</div>
		);
}

export default Navigation;