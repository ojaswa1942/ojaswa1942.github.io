 import React from 'react';
import SnowStorm from 'react-snowstorm';

const Snowstorm = () =>{
	return(
			<div>
				<SnowStorm 
					vMaxY='2.5' 
					vMaxX='1'
					flakesMaxActive='50'
					flakesMax='90' 
					targetElement='snow-target'
					excludeMobile='false'
				/>
			</div>
		);
}

export default Snowstorm;