import React,{ Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

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
                <div className="container-fluid">
                    <Row>
                        <Col sm={12}>
                            <h3> Design and Wireframes </h3>
                            <p> Write my design akills here</p>
                            <h3> Development </h3>
                            <p> Write my development skills here</p>
                            <h3> Testing </h3>
                            <p> Write my testing skills here</p>
                        </Col>
                    </Row>
                </div>
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
