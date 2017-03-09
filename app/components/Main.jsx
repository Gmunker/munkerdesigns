import React from 'react';
import {Router, Route, Link, hashHistory} from 'react-router';

import Home from 'Home';
import About from 'About';
import Education from 'Education';
import Portfolio from 'Portfolio';
import Contact from 'Contact';


export class Main extends React.Component {
  
  render() {

    return (
      <div id="main-div">
      <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/About" component={About} />
      </Router>
      </div>
    )  
  }
}

module.exports = Main;