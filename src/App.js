import React, { Component } from 'react';
import './App.css';
// import logo from './assets/pictures/name-white.png';
import Welcome from './Components/Welcome/Welcome'
import AboutMe from './Components/AboutMe/AboutMe'
import Navigation from './Components/Navigation/Navigation'
import {navFunctions} from './assets/navFunc'

class App extends Component {
	componentDidMount(){
		navFunctions();
	}
	render(){
		return(
		  <div className="App">
		  	<Navigation />
		    <Welcome />
		    <AboutMe />
		    <AboutMe />

		  </div>
		);
	}
}

export default App;