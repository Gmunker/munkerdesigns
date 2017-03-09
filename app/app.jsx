import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';

//Load css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Main />,
	document.getElementById('app')
	);
