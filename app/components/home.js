import React,{ Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import SocialLinks from './shared_components/socialLinks';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            windowHeight : window.innerHeight
        }
        this.handleResize = this.handleResize.bind(this);
    }
    handleResize(e) {
        this.setState({windowHeight: window.innerHeight});
        console.log(this.state.windowHeight);
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    render() {
        return  (
        	<header id="home" style={{"height":this.state.windowHeight}}>
                <div className="home_bg"></div>
                <div className="myInfo">
            		<div className="avatar"></div>
            		<h2 className="myName">Deepak Prakash</h2>
            		<h4 className="profile">UI - Front End - Web Developer</h4>
                    <SocialLinks />
                </div>          
        	</header>
        );
    }
}

export default Home;
