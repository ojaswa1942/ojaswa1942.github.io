import React from 'react';
import './Skills.css'
import arch from '../../assets/skills/arch.png'
import aws from '../../assets/skills/aws.svg'
import bash from '../../assets/skills/bash.svg'
import bootstrap from '../../assets/skills/bootstrap.png'
import c from '../../assets/skills/c.svg'
import cpp from '../../assets/skills/cpp.png'
import css3 from '../../assets/skills/css3.png'
import debian from '../../assets/skills/debian.png'
import docker from '../../assets/skills/docker.svg'
import ec2 from '../../assets/skills/ec2.svg'
import expressjs from '../../assets/skills/expressjs.png'
import git from '../../assets/skills/git.png'
import heroku from '../../assets/skills/heroku.png'
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
import terminal from '../../assets/skills/terminal.png'
import windows from '../../assets/skills/windows.png'

const Skills = () =>{
	return(
		<div className='about pt5' id='skillsSection'>
			<br />
			<div className='linebreak' />

			<div className="" id='skillsSection-container'>
				
				<div className="w-100 w-two-thirds-ns pa2" id='skillsDiv2'>
					<div className='linebreak' />

					<img src={html5} className='skill-icons pa3' alt='HTML5' title='HTML5' />
					<img src={css3} className='skill-icons pa3' alt='CSS3' title='CSS3' />
					<img src={js} className='skill-icons pa3' alt='JS' title='JavaScript' />
					<img src={bootstrap} className='skill-icons pa3 small' alt='Bootstrap' title='Bootstrap' />
					<img src={npm} className='skill-icons pa3 small' alt='NPM' title='NPM' />
					<img src={react} className='skill-icons pa3 small' alt='React' title='React' />
					<img src={redux} className='skill-icons pa3' alt='Redux' title='Redux' />
					<img src={nodejs} className='skill-icons ph4 pa3 small2' alt='NodeJS' title='NodeJS' />
					<img src={expressjs} className='skill-icons ph4 pa3 small3 invert' alt='ExpressJS' title='ExpressJS' />
					<img src={mysql} className='skill-icons pa3' alt='MySQL' title='MySQL' />
					<img src={postgresql} className='skill-icons pa3 ph4 Ssmall' alt='PostgreSQL' title='PostgreSQL' />
					<img src={docker} className='skill-icons ph3 pa3 small3' alt='Docker' title='Docker' />
					<img src={heroku} className='skill-icons pl4 pa3 small' alt='Heroku' title='Heroku' />
					<img src={aws} className='skill-icons pa3 small' alt='AWS' title='AWS' />

					<div className='linebreak' />
	
					<img src={c} className='skill-icons pa3 small' alt='C' title='C' />
					<img src={cpp} className='skill-icons pa3' alt='C++' title='C++' />
					<img src={bash} className='skill-icons pa3 small' alt='Bash' title='Bash Scripting' />
					<img src={python} className='skill-icons pa3' alt='Python' title='Python' />
					<img src={java} className='skill-icons pa3' alt='Java' title='Java' />
					<img src={octave} className='skill-icons pa3' alt='Octave' title='Octave' />
					<img src={git} className='skill-icons pa3' alt='Git' title='Git' />
					<img src={netbeans} className='skill-icons pa3' alt='Netbeans IDE' title='Netbeans IDE' />

					<div className='linebreak' />

					
					<img src={arch} className='skill-icons pa3' alt='Arch Linux' title='Arch Linux' />
					<img src={debian} className='skill-icons pa3' alt='Debian Linux' title='Debian Linux' />
					<img src={ec2} className='skill-icons pa3' alt='Amazon EC2' title='Amazon EC2' />
					<img src={terminal} className='skill-icons pa3' alt='Terminal' title='Terminal' />
					<img src={windows} className='skill-icons pa3' alt='Windows' title='Windows' />				

				</div>

				<h1 className="f1 animated fadeIn w-100 w-third-ns ph3">Skills</h1>
				
			</div>
		</div>
		);
}

export default Skills;