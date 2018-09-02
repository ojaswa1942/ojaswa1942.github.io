import React from 'react';
import './Skills.css'
import NamePng from '../../assets/pictures/name-black.png'

const Skills = () =>{
	return(
		<div className='about pt5' id='skillsSection'>
			<h1 className="animated bounce"> Hello </h1>
		    <img src={NamePng} className="w-30" alt="Ojaswa" />
		    <br />
		</div>
		);
}

export default Skills;