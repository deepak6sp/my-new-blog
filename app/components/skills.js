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



class Skills extends Component {
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
        	<main id="skills">
                
                <section className="container container-fluid ">
                    <Row>
                        <Col sm={12}>
                            <p> My projects involve use of technologies such as:</p>
                            <section className={ "skills " + this.state.skillsModulesVisibleClass}>
                                <LazyLoad onContentVisible={() => this._animate("skillsModules")} offset={-100} throttle={0}>
                                    <ListSkills/>
                                </LazyLoad>
                            </section>
                            <p>I am self learner, love web technologies, have passion for what I do, and hope to do this forever.</p>
                            <Button>Download Resume</Button>
                        </Col>
                    </Row>
                </section>

                <Testimonial text="Deepak is hard working; learning and providing good quality work, always in pace with technology, and always searching for best solution. 
                    He is a team player; I like working with him and I recommend him with pleasure."
                    recommendedBy = "Clauidiu - Senior Developer @ mycause.com.au"
                />

			</main>
        );
    }
}

export default Skills;
