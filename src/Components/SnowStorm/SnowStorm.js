import React from 'react';
import SnowStorm from 'react-snowstorm';

const Snowstorm = () =>{
	return(
			<div>
				<SnowStorm 
					vMaxY='1' 
					vMaxX='1'
					flakesMaxActive='50'
					flakesMax='90' 
					targetElement='snow-target'
				/>
			</div>
		);
}

export default Snowstorm;