 import React, { Component } from 'react';
import './App.css';
import logo from './assets/pictures/name-white.png';
import Welcome from './Components/Welcome/Welcome'
import AboutMe from './Components/AboutMe/AboutMe'
import {goToAboutMe} from './assets/navFunc'

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
