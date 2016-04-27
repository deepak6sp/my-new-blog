import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import BackgroundPage from './components/shared_components/backgroundPage';
import Navbar from './components/shared_components/navbar';
import MainBlogPage from './components/mainBlogPage';
import Contact from './components/contact';

class MainLayout extends React.Component {
    render() {
        return ( 
        	<div id="home-page">
        		<BackgroundPage/>
	        	<Navbar />
        		{this.props.children}
        	</div>
        );
    }
} 

ReactDOM.render(
	<Router history={browserHistory}>
	    <Route path="/" component={MainLayout}>
	    	<IndexRoute component={MainBlogPage} />
	    	<Route path="blog" component={MainBlogPage}/>
	    	<Route path="contact" component={Contact}/>
	    </Route>
  	</Router>

,document.getElementById("main")); 