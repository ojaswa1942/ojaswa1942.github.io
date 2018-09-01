import React from 'react';
import './AboutMe.css'
import NamePng from '../../assets/pictures/name-black.png'

const AboutMe = () =>{
	return(
		<div className='about' id='aboutMe'>
			<br />
			<br />
			<br />
			<br />
			<h1 className="animated bounce"> Hello </h1>
		    <img src={NamePng} className="w-30" alt="Ojaswa" />
		    <br />
		</div>
		);
}

export default AboutMe;