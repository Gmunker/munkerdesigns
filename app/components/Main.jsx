import React from 'react';
import {Router, Route, Link, hashHistory} from 'react-router';

import Home from 'Home';
import About from 'About';
import Portfolio from 'Portfolio';
import Contact from 'Contact';


export class Main extends React.Component {
  
  render() {

    return (
      <div id="main-div">
      <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Contact" component={Contact} />
      </Router>
      </div>
    )  
  }
}

module.exports = Main;