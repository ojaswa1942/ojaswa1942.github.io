import React from 'react';
import './Projects.css'
import NamePng from '../../assets/pictures/name-black.png'

const Projects = () =>{
	return(
		<div className='about pt5' id='projectsSection'>
			<h1 className="animated bounce"> Hello </h1>
		    <img src={NamePng} className="w-30" alt="Ojaswa" />
		    <br />
		</div>
		);
}

export default Projects;