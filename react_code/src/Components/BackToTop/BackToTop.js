import React from 'react';
import './BackToTop.css'

const goToHomeSection = () => {
	const welcomSection = document.getElementById("welcome");
	welcomSection.scrollIntoView({
		behavior: "smooth",
		block: "start"
	})
}

const BackToTop = () =>{
	return(
		<div onClick={goToHomeSection} id='BackToTop' className='BackToTop doNotDisplay'>
			<div className='arrowUp' />
		</div>
		);
}

export default BackToTop;