import React,{ Component} from 'react';
import ReactDOM from 'react-dom';


import Navbar from './shared_components/navbar';
import Footer from './shared_components/footer';

class MainLayout extends Component {
	
    render() {
        return ( 
        	<main>
	        	<Navbar />
        		{this.props.children}
        		<Footer />
        	</main>
        );
    }
}

export default MainLayout;