import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Day Art Design</h1>
      </div>
    );
  }
}

export default App;
