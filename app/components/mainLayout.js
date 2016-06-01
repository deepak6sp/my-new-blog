import React,{ Component} from 'react';
import ReactDOM from 'react-dom';


import Navbar from './shared_components/navbar';
import Footer from './shared_components/footer';

class MainLayout extends Component {
	
    render() {
        return ( 
        	<div id="MainLayout">
	        	<Navbar />
	        	<main>
        		{this.props.children}
        		</main>
        		<Footer />
        	</div>
        	
        );
    }
}

export default MainLayout;