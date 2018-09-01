 import React from 'react';
import './Welcome.css'
import Snowstorm from '../SnowStorm/SnowStorm'
import Arrow from '../../assets/pictures/arrow-down-1.gif'

const Welcome = () =>{
	return(
		<div id="Welcome">
			<Snowstorm />
			<div className='container2' id="snow-target">
				<div className='header2'>
					<h1 className="f1 animated fadeIn" align='center'>Stalking me? </h1>
					<h2 className="f2 animated zoomIn" align='center'>Let me help. </h2>
				</div>
				<img src={Arrow} alt='Scroll Down' id="goDown" className="animated rollIn" />
			</div>
		</div>
		);
}


export default Welcome;