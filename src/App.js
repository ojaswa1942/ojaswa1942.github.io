import React, { Component } from 'react';
import './App.css';
import logo from './assets/pictures/name-white.png';
import Snowstorm from './Components/SnowStorm/SnowStorm'
import Welcome from './Components/Welcome/Welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Snowstorm />
        <Welcome />
        <h1> Hello </h1>
      </div>
    );
  }
}

export default App;
