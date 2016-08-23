import React,{ Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import WorkList from "./shared_components/workList";
import PostList from "./shared_components/postList";
import SplitBar from "./shared_components/splitBar";
import Testimonial from "./shared_components/testimonial";
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
                                <Col xs={10} xsOffset={1} sm={8} smOffset={3} className="scroll-down text-center">
                                    <ScrollLink activeClass="active" to="postList" spy={true} smooth={true} offset={-50} duration={500} >
                                        <div>Latest Posts</div>
                                        <FontAwesome className='super-crazy-colors' name='angle-down' size='lg'/>
                                    </ScrollLink>
                                </Col>
                            </Row>
                        </div>
                    </div>
            	</header>
              
                <WorkList />
                <PostList />
                 <Testimonial text="Deepak is hard working; learning and providing good quality work, always in pace with technology, and always searching for best solution. 
                    He is a team player; I like working with him and I recommend him with pleasure."
                    recommendedBy = "Clauidiu - Senior Developer @ mycause.com.au"
               />
                
            </main>
        );
    }
}

export default Home;
