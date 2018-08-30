import React from 'react';
import './Welcome.css'
import Snowstorm from '../SnowStorm/SnowStorm'
import Arrow from '../../assets/pictures/arrow-down-1.gif'

const Welcome = () =>{
	return(
		<div>
			<Snowstorm />
			<div className='container' id="snow-target">
				<div className='header'>
					<h1 className="f1 animated fadeIn" align='center'>Stalking me? </h1>
					<h2 className="f2 animated zoomIn" align='center'>Let me help. </h2>
				</div>
				<img src={Arrow} alt='Scroll Down' id="goDown" className="dib v-bottom animated rollIn" />
			</div>
		</div>
		);
}


export default Welcome;