import React,{ Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import About from "./about";
import SplitBar from "./shared_components/splitBar";
import Scroll from 'react-scroll';

var ScrollLink = Scroll.Link;
var Element = Scroll.Element;


class Home extends Component {
    constructor(props){
        super(props);
        window.scrollTo(0,0);
    }
   
    render() {
        return  (
            <main id="home">
                <header id="header" >
                    <div className="home_bg"></div>
                    <div className="myInfo container-fluid container">
                        <Row >
                            <Col xs={12} sm={8} smOffset={4}>
                                <h1 className="greetings">Hey</h1>
                        		<h3 className="myName">I'm Deepak</h3>
                        		<div className="profile">
                                    UI and Front End Developer based in Melbourne, Australia.
                                    While I specialize in Front end, I do a lot of work on Javascript and Node technologies
                                    developing rich web applications.
                                </div>
                            </Col>
                        </Row>
                        <Row className="scroll-down-block">
                            <Col xs={12} smOffset={9} sm={3} className="scroll-down">
                                <ScrollLink className="btn btn-default" activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} >
                                    About
                                </ScrollLink>
                            </Col>
                        </Row>
                    </div>
            	</header>
              
                <About />
                
            </main>
        );
    }
}

export default Home;
