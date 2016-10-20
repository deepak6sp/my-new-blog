import React,{ Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem, Button, Panel, Image } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import VisibilitySensor from 'react-visibility-sensor';
import { Link } from 'react-router';
import Scroll from 'react-scroll';
import LazyLoad from 'react-lazy-load';
import ListSkills from "./listSkills";
import SplitBar from "./splitBar";
import Testimonial from "./testimonial";



class WorkList extends Component {
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
        	<main id="workList">
                <section className="container container-fluid">
                    <Row>
                        <Col xs={12}>
                            <h2> Recent Work </h2>
                            <hr/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={4}>
                            <div className="image-container">
                            	<Image src="http://www.freedigitalphotos.net/images/img/homepage/87357.jpg" rounded />
                            </div>
                        </Col>
                        <Col xs={12} sm={4}>
                             <div className="image-container">
                            	<Image src="http://www.freedigitalphotos.net/images/img/homepage/87357.jpg" rounded />
                            </div>
                        </Col>
                        <Col xs={12} sm={4}>
                             <div className="image-container">
                            	<Image src="http://www.freedigitalphotos.net/images/img/homepage/87357.jpg" rounded />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                    	<Col sm={12}>
                    		<Button>View more</Button>
                    	</Col>
                    </Row>
                </section>
			</main>
        );
    }
}

export default WorkList;
