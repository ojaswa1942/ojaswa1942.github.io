 import React, { Component } from 'react';
import './App.css';
import logo from './assets/pictures/name-white.png';
import Welcome from './Components/Welcome/Welcome'
import AboutMe from './Components/AboutMe/AboutMe'


const goToAboutMe = () => {
	const arrow = document.getElementById("goDown");
	const aboutMeSection = document.getElementById("aboutMe");
	const goToAbout = () => {
		aboutMeSection.scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	}
	arrow.addEventListener("click", goToAbout);
}

class App extends Component {

	componentDidMount(){
		goToAboutMe();
	}

	render(){
		return(
		  <div className="App">
		    <Welcome />
		    <AboutMe />
		  </div>
		);
	}
}

export default App;
