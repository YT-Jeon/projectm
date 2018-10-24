import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Team from './Team';
import Faucet from './Faucet';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={Home} />
          <Route name="team" path="/team" component={Team} />
          <Route name="faucet" path="/faucet" component={Faucet} />
        </div>
      </Router>
    );
  }
}

export default App;