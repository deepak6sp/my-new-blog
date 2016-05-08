import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import MainLayout from './components/MainLayout';
import About from './components/about';
import Contact from './components/contact';
import BlogList from './containers/blogList';

const AppRoutes = (<Router history={browserHistory}>
	    <Route path="/" component={MainLayout}>
	    	<IndexRoute component={BlogList} />
	    	<Route path="blog" component={BlogList}/>
            <Route path="about" component={About}/>
	    	<Route path="contact" component={Contact}/>
	    </Route>
  	</Router>);

export default AppRoutes;