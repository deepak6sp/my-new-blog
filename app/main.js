import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import BackgroundPage from './components/shared_components/backgroundPage';
import Navbar from './components/shared_components/navbar';

import About from './components/about';
import Contact from './components/contact';
import Footer from './components/shared_components/footer';

import BlogList from './containers/blogList';
import rootReducer from './reducers/index.js';

let store = createStore(rootReducer, {});

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
<Provider store={store}>
	<Router history={browserHistory}>
	    <Route path="/" component={MainLayout}>
	    	<IndexRoute component={BlogList} />
	    	<Route path="blog" component={BlogList}/>
            <Route path="about" component={About}/>
	    	<Route path="contact" component={Contact}/>
	    </Route>
  	</Router>
</Provider>
,document.getElementById("main")); 