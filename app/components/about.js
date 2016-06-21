import React,{ Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem, Button, Panel } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import ListSkills from "./shared_components/listSkills";
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
                
                <section className="container container-fluid scrollflow -pop -opacity">
                    <Row>
                        <Col sm={12}>
                            <p>I am an IT graduate, freelance Web Developer having 4 years of user experience and front end development. 
                                I develop with skills of minimal usability designs and using core XHTML/HTML5, CSS3 and Javascript. 
                                Have experince working on PHP frameworks and have knowledge of ruby on rails. I love node technologies and how 
                                the way they have reformed the full stack development.
                            </p>
                        </Col>
                    </Row>
                    <Row className="text-center dev-modules">
                        <Col sm={12} md={4}>
                            <FontAwesome className='super-crazy-colors' name="cubes" size='4x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
                            <h4> Design and Wireframes </h4>
                            <p> I use photoshop for designs and convert them to complete web solution. Recently, I have
                               been using my favourite Google drawings for mockups and wireframes, and loving it.</p>
                        </Col>
                        <Col sm={12} md={4}>
                            <FontAwesome className='super-crazy-colors' name="connectdevelop" size='4x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
                            <h4> Development </h4>
                            <p> I develop custom made user friendly web pages and applications using the latest open source technologies. I use build tools such as 
                            npm, bower, webpack, gulp, sass to speed up developement process.</p>
                        </Col>
                        <Col sm={12} md={4}>
                            <FontAwesome className='super-crazy-colors' name="cogs" size='4x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
                            <h4> Testing </h4>
                            <p> I consider testing to be as important as design and development, so I believe in Agile test driven development. Also, I will make sure the 
                                web application works fine accross multi browsers and devices.</p>
                        </Col>
                    </Row>
                </section>
                <SplitBar text="Skills" link="/blog" iconName="arrow-circle-down" />
                <section className="container container-fluid scrollflow -slide-right -opacity">
                    <p> My projects involve use of technologies such as:</p>
                    <ListSkills/>
                     <p>I am self learner, love web technologies, have passion for what I do, and hope to do this forever.</p>
                     <Button>Download Resume</Button>
                </section>
                <SplitBar text="Blog" link="/blog" iconName="arrow-circle-right" />
                <section className="container container-fluid scrollflow -pop -opacity">
                    <Row>
                        <Col sm={12}>
                            <p> This blog is developed using MERN(Mongo, Express, Redux (React), Node) stack. I have also used react-bootstrap, which is my
                                favourite front end framework, and react-scroll for animations.</p>
                            <p> I am doing this blog to share knowledge that focuses mainly on latest web technologies involving Javascript and Node. However, I would not hesitate
                                to include tips and tricks about UX/UI, front end and back end technologies </p>
                        </Col>
                    </Row>
                    <Button>Visit Blog</Button>
                </section>
               
			</main>
        );
    }
}

export default About;
