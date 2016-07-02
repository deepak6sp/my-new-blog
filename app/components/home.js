import React,{ Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import About from "./about";
import Contact from "./contact";
import SplitBar from "./shared_components/splitBar";
import Scroll from 'react-scroll';

var ScrollLink = Scroll.Link;
var Element = Scroll.Element;


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
                    <Row className="myInfo container-fluid container">
                        <Col xs={12} md={7}>
                		  <div className="avatar"></div>
                        </Col>
                        <Col xs={12} md={5}>
                    		<h1 className="myName">Hi, I'm Deepak</h1>
                    		<div className="profile">UI and Front End Developer <span className="location">based in Melbourne, Australia.</span></div>
                            <p className="description"> While I specialize in Front end, I do a lot of work on Javascript and Node technologies
                                developing rich web applications</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="scroll-down">
                            <ScrollLink activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500}>
                                <FontAwesome className='super-crazy-colors' name="arrow-circle-down" size='3x'/>
                            </ScrollLink>
                        </Col>
                    </Row>          
            	</header>
              
                <About />
                
                <Contact />
                
            </div>
        );
    }
}

export default Home;
