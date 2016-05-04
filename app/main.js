import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import BackgroundPage from './components/shared_components/backgroundPage';
import Navbar from './components/shared_components/navbar';
import BlogList from './components/blogList';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/shared_components/footer';

class MainLayout extends React.Component {
    render() {
        return ( 
        	<div id="home-page">
        		<BackgroundPage/>
	        	<Navbar />
        		{this.props.children}
        		<Footer />
        	</div>
        );
    }
} 

ReactDOM.render(
	<Router history={browserHistory}>
	    <Route path="/" component={MainLayout}>
	    	<IndexRoute component={BlogList} />
	    	<Route path="blog" component={BlogList}/>
            <Route path="about" component={About}/>
	    	<Route path="contact" component={Contact}/>
	    </Route>
  	</Router>

,document.getElementById("main")); 