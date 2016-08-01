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
    componentDidMount(){
        var navBar= document.getElementsByClassName("navbar")[0];
        navBar.classList.add("border-none");   
    }
    componentWillUnmount(){
        var navBar= document.getElementsByClassName("navbar")[0];
        navBar.classList.remove("border-none");   
    }
    render() {
        return  (
            <main id="home">
                <header id="header" >
                    <div className="home_bg">
                        <div className="myInfo container-fluid container">
                            <Row >
                                <Col xs={10} xsOffset={1} sm={8} smOffset={3}>
                                    <h1 className="greetings">Hello</h1>
                            		<h3 className="myName">I'm Deepak</h3>
                            		<div className="profile">
                                        UI and Front End Developer based in Melbourne, Australia.
                                        While I specialize in Front end, I do a lot of work on Javascript and Node
                                        developing rich web applications.
                                    </div>
                                </Col>
                            </Row>
                            <Row className="scroll-down-block">
                                <Col xs={10} xsOffset={1} smOffset={9} sm={2} className="scroll-down">
                                    <ScrollLink className="btn btn-default" activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} >
                                        About me
                                    </ScrollLink>
                                </Col>
                            </Row>
                        </div>
                    </div>
            	</header>
              
                <About />
                
            </main>
        );
    }
}

export default Home;
