import React from 'react';
import ReactDOM from 'react-dom';


import Navbar from './shared_components/navbar';
import Footer from './shared_components/footer';

class MainLayout extends React.Component {
    render() {
        return ( 
        	<div id="home-page">
	        	<Navbar />
        		{this.props.children}
        		<Footer />
        	</div>
        );
    }
}

export default MainLayout;