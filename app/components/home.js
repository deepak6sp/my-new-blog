import React,{ Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import SocialLinks from './shared_components/socialLinks';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return  (
        	<header id="home">
        		<div className="avatar"></div>
        		<h2 className="myName">Deepak Prakash</h2>
        		<h4 className="profile">
        			<div>UI / Front End / Web developer</div>
        			<SocialLinks />
        		</h4>
        	</header>
        );
    }
}

export default Home;
