import React,{ Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
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
                            <p>I am a freelance web Developer. I develop with skills of minimal usability designs and using core XHTML/HTML5, CSS3 and Javascript but not limited to using frameworks such as Foundation, Bootstrap, React and Angular
                            for single page applications. Have worked on PHP frameworks and have knowledge of ruby on rails. I love node technologies and how the way they have reformed the full stack development. I am ready to work on 
                            node technologies, to continously learn and contribute. I have passion for what i do, love web technologies, and hope to do this forever.</p>
                        </Col>
                    </Row>
                </div>
                <SplitBar text="Skills" link="/blog" iconName="arrow-circle-down" />
                <center className="container-fluid">
                    <Row>
                        <Col sm={12} md={4}>
                            <FontAwesome className='super-crazy-colors' name="cubes" size='5x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
                            <h3> Design and Wireframes </h3>
                            <p> I have enormous experience using photoshop and converting designs to complete web solution. I use moqups for wireframes, Howerver, recently I have
                               been using Goole drawings for mockups and loving it.</p>
                        </Col>
                        <Col sm={12} md={4}>
                            <FontAwesome className='super-crazy-colors' name="connectdevelop" size='5x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
                            <h3> Development </h3>
                            <p> I develop custom made user friendly web pages and applications using the latest open source technologies. I use build tools such as 
                            npm, bower, webpack, gulp, sass to speed up developement process.</p>
                        </Col>
                        <Col sm={12} md={4}>
                            <FontAwesome className='super-crazy-colors' name="cogs" size='5x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
                            <h3> Testing </h3>
                            <p> I consider testing to be as important as design and development, so I believe in Agile test driven development. Also, I will make sure the 
                                web application works fine accross multi browser.</p>
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
