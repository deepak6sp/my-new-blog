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
        this._handleScroll = this._handleScroll.bind(this);
    }
    _handleScroll(){
        console.log("scrolling");
        var navBar= document.getElementsByClassName("navbar")[0],
            bgImage = document.getElementsByClassName("home_bg")[0],
            range = 170,
            scrollTop = document.body.scrollTop;
        if (scrollTop > range) {
            navBar.classList.add("navbar-inverse");
            navBar.classList.remove("navbar-default");
            bgImage.classList.add("blurred");
        }
        else {
            navBar.classList.remove("navbar-inverse");
            navBar.classList.add("navbar-default");
            bgImage.classList.remove("blurred");
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this._handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this._handleScroll);
    }
    render() {
        return  (
            <div id="home">
                <header id="header" >
                    <div className="home_bg"></div>
                    <Row className="myInfo container-fluid container">
                        <Col xs={12} md={8} mdOffset={2}>
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
                
            </div>
        );
    }
}

export default Home;
