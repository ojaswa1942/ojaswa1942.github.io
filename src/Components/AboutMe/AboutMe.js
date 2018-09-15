import React from 'react';
import './AboutMe.css'
import Avatar from '../../assets/pictures/md_avatar_wizard.png'

const AboutMe = () =>{
	return(
		<div className='pt5 about' id='aboutMe'>
			<div className="" id='aboutMe-container'>

				<h1 className="f2 animated bounce">Hello, I'm Ojaswa</h1>
				<div id='resAbout'>
					<img src={Avatar} className='w-70 w-70-m w-30-l shadow-5' id='avatar' alt='' />
					<p className='f4'>
						A <b>noob</b> by day, <br />
						<b>Full Stack Web Dev</b> | <b>Open Source Enthusiast</b> | <b>Wizard</b>   by night
					</p>
				</div>
			    <br />

			</div>
		</div>
		);
}

export default AboutMe;