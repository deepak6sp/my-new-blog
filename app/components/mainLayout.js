import React,{ Component} from 'react';
import ReactDOM from 'react-dom';


import Navigation from './shared_components/navigation';
import Footer from './shared_components/footer';

class MainLayout extends Component {
	
    render() {
        return ( 
        	<div id="MainLayout">
	        	<Navigation />
        		{this.props.children}
        		<Footer />
        	</div>
        	
        );
    }
}

export default MainLayout;