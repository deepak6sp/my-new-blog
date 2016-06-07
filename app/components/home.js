import React,{ Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import About from "./about";


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
            <div id="home">
            	{/*<header id="header" style={{"height":this.state.windowHeight}}>*/}
                <header id="header" >
                    <div className="home_bg"></div>
                    <Row className="myInfo">
                		<div className="avatar"></div>
                		<h1 className="myName">Deepak Prakash</h1>
                		<div className="profile">UI - Front End - Web Developer</div>
                        <div className="location">Based in the heart of melbourne</div>
                        
                    </Row>          
            	</header>
                <About />
                
                <Row>
                    <Col sm={12}>
                        <h3>Resume (Download pdf)</h3>
                        <p>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has surviv</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;
