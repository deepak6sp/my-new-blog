import React,{ Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem, Button, Panel } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import SplitBar from "./shared_components/splitBar";

class About extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
    }

    render() {
        return  (
        	<main id="about">
                <SplitBar text="About me" link="/blog" iconName="arrow-circle-down" />
                <div className="container-fluid">
                    <Row>
                        <Col sm={12}>
                            <p>I am an IT graduate, freelance Web Developer having 4 years of user experience and front end development. 
                                I develop with skills of minimal usability designs and using core XHTML/HTML5, CSS3 and Javascript. 
                                Have experince working on PHP frameworks and have knowledge of ruby on rails. I love node technologies and how 
                                the way they have reformed the full stack development. I use following technologies when developing websites:
                            </p>
                        </Col>
                       
                        <Col xs={12} sm={6} md={3}>
                            <Panel header="Web languages">
                                <li> XHtml / Html5 </li>
                                <li> Css3 / Sass </li>
                                <li> Javascript / Jquery </li>
                                <li> PHP </li>
                            </Panel>
                        </Col>

                        <Col xs={12} sm={6} md={3}>
                            <Panel header="Libraries / Frameworks">
                                <li> React / Redux / Flux</li>
                                <li> Angular / Express / Meteor</li>
                                <li> CodeIginiter / Laravel</li>
                                <li> Wordpress / Drupal </li>
                            </Panel>
                        </Col>

                        <Col xs={12} sm={6} md={3}>
                            <Panel header="Collaboration">
                                <li> Node Modules (NPM) </li>
                                <li> Bower </li>
                                <li> Gulp / Grunt </li>
                                <li> Webpack </li>
                            </Panel>
                        </Col>

                        <Col xs={12} sm={6} md={3}>
                            <Panel header="Test Utilities">
                                <li> Mocha </li>
                                <li> Chai </li>
                                <li> Jasmine </li>
                                <li> Selenium </li>
                            </Panel>
                        </Col>



                        <Col sm={12}>
                            <p>I love web technologies, self learner, have passion for what I do, and hope to do this forever.</p>
                        </Col>
                    </Row>
                </div>
                <SplitBar text="Skills" link="/blog" iconName="arrow-circle-down" />
                <center className="container-fluid skills">
                    <Row>
                        <Col sm={12} md={4}>
                            <FontAwesome className='super-crazy-colors' name="cubes" size='5x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
                            <h4> Design and Wireframes </h4>
                            <p> I use photoshop for designs and convert them to complete web solution. Recently, I have
                               been using my favourite Google drawings for mockups and wireframes, and loving it.</p>
                        </Col>
                        <Col sm={12} md={4}>
                            <FontAwesome className='super-crazy-colors' name="connectdevelop" size='5x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
                            <h4> Development </h4>
                            <p> I develop custom made user friendly web pages and applications using the latest open source technologies. I use build tools such as 
                            npm, bower, webpack, gulp, sass to speed up developement process.</p>
                        </Col>
                        <Col sm={12} md={4}>
                            <FontAwesome className='super-crazy-colors' name="cogs" size='5x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
                            <h4> Testing </h4>
                            <p> I consider testing to be as important as design and development, so I believe in Agile test driven development. Also, I will make sure the 
                                web application works fine accross multi browsers and devices.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Button bsStyle="warning">Download Resume</Button>
                        </Col>
                    </Row>
                </center>
                <SplitBar text="Visit my blog" link="/blog" iconName="arrow-circle-right" />
                <Row>
                        <Col sm={12}>
                            <h3>Resume (Download pdf)</h3>
                            <p>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has surviv</p>
                        </Col>
                    </Row>
                <Row>
                    <Col sm={12}>
                        <h3>About this blog</h3>
                        <p>This blog is developed using MERN(Mongo, Express, Redux (React), Node) stack. </p>
                    </Col>
                </Row>
			</main>
        );
    }
}

export default About;
