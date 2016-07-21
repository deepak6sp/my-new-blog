import React,{ Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem, Button, Panel } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import VisibilitySensor from 'react-visibility-sensor';
import { Link } from 'react-router';
import Scroll from 'react-scroll';
import LazyLoad from 'react-lazy-load';
import ListSkills from "./shared_components/listSkills";
import SplitBar from "./shared_components/splitBar";
import Testimonial from "./shared_components/testimonial";



class About extends Component {
    constructor(props) {
        super(props);
        this.state = {devModulesVisibleClass: "", blogModulesVisibleClass:"", skillsModulesVisibleClass:"", testimonialVisibleClass:""};
    }

    _animate(module){
        if( module == "devModules" ){
            this.setState({ devModulesVisibleClass:"devModulesVisible"});
        } else if ( module == "blogModules"){
            this.setState({ blogModulesVisibleClass:"blogModulesVisible"});
        } else if ( module == "skillsModules"){
            this.setState({ skillsModulesVisibleClass:"skillsModulesVisible"});
        }
    }


    render() {
       
        return  (
        	<main id="about">
                <SplitBar text="About me" link="" iconName="user" />
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
                    <LazyLoad onContentVisible={() => this._animate("devModules")} offsetTop={-100} throttle={0}>
                        <Row className={"text-center dev-modules " + this.state.devModulesVisibleClass}>
                            <Col sm={12} md={4}>
                                <FontAwesome className='super-crazy-colors' name="mobile" size='4x'/>
                                <h4> Design and Wireframes </h4>
                                <p> I use photoshop for designs and convert them to complete web solution. Recently, I have
                                   been using my favourite Google drawings for mockups and wireframes, and loving it.</p>
                            </Col>
                            <Col sm={12} md={4}>
                                <FontAwesome className='super-crazy-colors' name="code" size='3x'/>
                                <h4> Development </h4>
                                <p> I develop custom made user friendly web pages and applications using the latest open source technologies. I use build tools such as 
                                npm, bower, webpack, gulp, sass to speed up developement process.</p>
                            </Col>
                            <Col sm={12} md={4}>
                                <FontAwesome className='super-crazy-colors' name="cogs" size='3x'/>
                                <h4> Testing </h4>
                                <p> I consider testing to be as important as design and development, so I believe in Agile test driven development. Also, I will make sure the 
                                    web application works fine accross multi browsers and devices.</p>
                            </Col>
                        </Row>
                    </LazyLoad>
                </section>

                
               <Testimonial text="Deepak is hard working; learning and providing good quality work, always in pace with technology, and always searching for best solution. 
                    He is a team player; I like working with him and I recommend him with pleasure."
                    recommendedBy = "Clauidiu - Senior Developer @ mycause.com.au"
               />

                <SplitBar text="About my blog" iconName="pencil" />
                
                <section className="container container-fluid">
                    <LazyLoad onContentVisible={() => this._animate("blogModules")} offset={-100} throttle={0}>
                        <Row className={ "blog "+ this.state.blogModulesVisibleClass}>
                            <Col sm={12}>
                                <p> My website is developed on MERN(Mongo, Express, Redux (React), Node) stack. I have also used react-bootstrap, which is my
                                    favourite front end framework, and react way of animations.</p>
                                <p> I am doing this blog to share knowledge that focuses mainly on latest web technologies involving Javascript and Node. However, I would not hesitate
                                    to include tips and tricks about UX/UI, front end and back end technologies </p>
                            </Col>
                        </Row>
                    </LazyLoad>
                    <Link to="blog" className="btn btn-default">Visit Blog</Link>
                </section>
			</main>
        );
    }
}

export default About;
