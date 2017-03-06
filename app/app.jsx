import React from 'react';
import ReactDOM from 'react-dom';
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

import Home from 'Home';
import About from 'About';
import Education from 'Education';
import Portfolio from 'Portfolio';
import Contact from 'Contact';

//Load css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<div>
	<Home />
	<About />
	<Education />
	<Portfolio />
	<Contact />
	</div>,
	document.getElementById('app')
	);
