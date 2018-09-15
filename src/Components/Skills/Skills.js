import React from 'react';
import './Skills.css'
import arch from '../../assets/skills/arch.png'
import aws from '../../assets/skills/aws.svg'
import bootstrap from '../../assets/skills/bootstrap.png'
import c from '../../assets/skills/c.svg'
import cpp from '../../assets/skills/cpp.png'
import css3 from '../../assets/skills/css3.png'
import debian from '../../assets/skills/debian.png'
import docker from '../../assets/skills/docker.svg'
import ec2 from '../../assets/skills/ec2.svg'
import expressjs from '../../assets/skills/expressjs.png'
import git from '../../assets/skills/git.png'
import heroku from '../../assets/skills/heroku.svg'
import html5 from '../../assets/skills/html5.svg'
import java from '../../assets/skills/java.svg'
import js from '../../assets/skills/js.svg'
import mysql from '../../assets/skills/mysql.svg'
import netbeans from '../../assets/skills/netbeans.png'
import nodejs from '../../assets/skills/nodejs.png'
import npm from '../../assets/skills/npm.png'
import octave from '../../assets/skills/octave.png'
import postgresql from '../../assets/skills/postgresql.svg'
import python from '../../assets/skills/python.svg'
import react from '../../assets/skills/react.svg'
import redux from '../../assets/skills/redux.png'

const Skills = () =>{
	return(
		<div className='about pt5' id='skillsSection'>
			<div className="" id='skillsSection-container'>

				<div className="" id='skillsDiv2'>
					<img src={html5} className='skill-icons pa2' />
					<img src={css3} className='skill-icons pa2 small' />
					<img src={js} className='skill-icons pa2' />
					<img src={bootstrap} className='skill-icons pa2 small' />
					<img src={npm} className='skill-icons pa2' />
					<img src={nodejs} className='skill-icons pa2' />
					Hola<br />
				</div>

				<h1 className="f1 animated fadeIn">Skills</h1>
				
			</div>
		</div>
		);
}

export default Skills;