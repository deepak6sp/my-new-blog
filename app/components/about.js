import React,{ Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem, Button, Panel } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import VisibilitySensor from 'react-visibility-sensor';
import { Link } from 'react-router';
import Scroll from 'react-scroll';

import ListSkills from "./shared_components/listSkills";
import SplitBar from "./shared_components/splitBar";



class About extends Component {
    constructor(props) {
        super(props);
        this.state = {devModulesVisibleClass: "", skillsVisibleClass:"", blogVisibleClass:"", testimonialVisibleClass:""};
    }
    componentDidMount(){
    }
    _devModules(isVisible){
        if(isVisible){
            this.setState({ devModulesVisibleClass:"devModulesVisible"});
        }
    }
    _skills(isVisible){
        if(isVisible){
            this.setState({ skillsVisibleClass : "skillsVisible"});
        }else{
            this.setState({ skillsVisibleClass : ""});
        }
    }
    _blog(isVisible){
        if(isVisible){
            this.setState({ blogVisibleClass : "blogVisible"});
        }else{
            this.setState({ blogVisibleClass : ""});
        }
    }
    _testimonial(isVisible){
        if(isVisible){
            this.setState({ testimonialVisibleClass:"testimonialVisible"});
        }
    }


    render() {
       
        return  (
        	<main id="about">
               
                <section className="container container-fluid ">
                    <Row>
                        <Col sm={12}>
                            <p>I am an IT graduate, freelance Web Developer having 4 years of user experience and front end development. 
                                I develop with skills of minimal usability designs and using core XHTML/HTML5, CSS3 and Javascript. 
                                Have experince working on PHP frameworks and have knowledge of ruby on rails. I love node technologies and how 
                                the way they have reformed the full stack development.
                            </p>
                        </Col>
                    </Row>
                    <VisibilitySensor onChange={this._devModules.bind(this)} />
                    <Row className={"text-center dev-modules " + this.state.devModulesVisibleClass}>
                        <Col sm={12} md={4}>
                            <FontAwesome className='super-crazy-colors' name="mobile" size='4x'/>
                            <h4> Design and Wireframes </h4>
                            <p> I use photoshop for designs and convert them to complete web solution. Recently, I have
                               been using my favourite Google drawings for mockups and wireframes, and loving it.</p>
                        </Col>
                        <Col sm={12} md={4}>
                            <FontAwesome className='super-crazy-colors' name="code" size='4x'/>
                            <h4> Development </h4>
                            <p> I develop custom made user friendly web pages and applications using the latest open source technologies. I use build tools such as 
                            npm, bower, webpack, gulp, sass to speed up developement process.</p>
                        </Col>
                        <Col sm={12} md={4}>
                            <FontAwesome className='super-crazy-colors' name="cogs" size='4x'/>
                            <h4> Testing </h4>
                            <p> I consider testing to be as important as design and development, so I believe in Agile test driven development. Also, I will make sure the 
                                web application works fine accross multi browsers and devices.</p>
                        </Col>
                    </Row>
                </section>

                
                <section className="testimonial">
                    <img src="parallex1.jpeg"/>
                    <p> Deepak is hard working; learning and providing good quality work, always in pace with technology, and always searching for best solution. 
                        He is a team player; I like working with him and I recommend him with pleasure</p>
                </section>

                <SplitBar text="About my blog" iconName="pencil" />
                
                <section className="container container-fluid">
                    <VisibilitySensor onChange={this._blog.bind(this)} />
                    <Row className={ "blog "+ this.state.blogVisibleClass}>
                        <Col sm={12}>
                            <p> My blog is developed using MERN(Mongo, Express, Redux (React), Node) stack. I have also used react-bootstrap, which is my
                                favourite front end framework, and react way of animations.</p>
                            <p> I am doing this blog to share knowledge that focuses mainly on latest web technologies involving Javascript and Node. However, I would not hesitate
                                to include tips and tricks about UX/UI, front end and back end technologies </p>
                        </Col>
                    </Row>
                    <Link to="blog" className="btn btn-default">Visit Blog</Link>
                </section>

                <SplitBar text="Skills" iconName="star" />
                
                <section className="container container-fluid " id="skills">
                     <p> My projects involve use of technologies such as:</p>
                     <VisibilitySensor onChange={this._skills.bind(this)} />
                     <section className={ "skills " + this.state.skillsVisibleClass}><ListSkills/></section>
                     <p>I am self learner, love web technologies, have passion for what I do, and hope to do this forever.</p>
                     <Button>Download Resume</Button>
                </section>
                
               
			</main>
        );
    }
}

export default About;
