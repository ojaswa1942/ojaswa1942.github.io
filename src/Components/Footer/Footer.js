import React from 'react';
import './Footer.css'
import NamePng from '../../assets/pictures/name-black.png'

const Footer = () =>{
	return(
		<div className='about pt5' id='contactMe'>
			<h1 className="animated bounce"> Hello </h1>
		    <img src={NamePng} className="w-30" alt="Ojaswa" />
		    <br />
		</div>
		);
}

export default Footer;