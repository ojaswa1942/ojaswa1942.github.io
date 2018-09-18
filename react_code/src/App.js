import React, { Component } from 'react';
import './App.css';
import Welcome from './Components/Welcome/Welcome'
import AboutMe from './Components/AboutMe/AboutMe'
import Navigation from './Components/Navigation/Navigation'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'
import {navFunctions} from './assets/navFunc'
import {TinyButton as ScrollUpButton} from "react-scroll-up-button"

class App extends Component {
	componentDidMount(){
		navFunctions();
	}
	render(){
		return(
		  <div className="App">
		  	<Navigation />
		  	<ScrollUpButton />
		    <Welcome />
		    <AboutMe />
		    <Skills />
		    <Projects />
		    <Footer />
		  </div>
		);
	}
}

export default App;