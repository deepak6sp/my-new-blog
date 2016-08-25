import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import MainLayout from './components/MainLayout';
import Home from './components/Home.js';
import About from './components/about';
import Contact from './components/contact';
import Blog from './containers/blogList';

const AppRoutes = (<Router history={browserHistory}>
	    <Route path="/" component={MainLayout}>
	    	<IndexRoute component={Home} />
	    	<Route path="home" component={Home}/>
	    	<Route path="blog" component={Blog}/>
            <Route path="about" component={About}/>
	    	<Route path="contact" component={Contact}/>
	    </Route>
  	</Router>);

export default AppRoutes;