import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import BackgroundPage from './components/backgroundPage';
import MainPage from './components/mainPage';

class Main extends React.Component {
    render() {
        return ( 
        	<div id="home-page">
        		<BackgroundPage/>
	        	<Navbar />
	        	<MainPage />
        	</div>
        );
    }
} 
 
ReactDOM.render(<Main />,document.getElementById("main")); 