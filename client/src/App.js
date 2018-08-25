import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './components/login';
import Dashboard from './components/dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <div className="App">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>Day Art Design</h1>
              <Link to="/login">Login</Link>
            </div>
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
