import React,{ Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem, Button, Panel, Image } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import VisibilitySensor from 'react-visibility-sensor';
import { Link } from 'react-router';
import Scroll from 'react-scroll';
import LazyLoad from 'react-lazy-load';
import ListSkills from "./listSkills";
import SplitBar from "./splitBar";




class PostList extends Component {
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

    handleClick(){
        console.log("panel clicked")
    }


    render() {
       
        return  (
        	<main id="postList">
                <section className="container container-fluid">
                    <Row>
                        <Col sm={12}>
                            <h2> Latest Posts</h2>
                            <hr/>
                        </Col>
                    </Row>
                    <Panel onClick={ this.handleClick }>
                        <Row>
                            <Col xs={12} sm={3} md={2} >
                                <div className="image-container">
                                    <Image  src="http://www.freedigitalphotos.net/images/img/homepage/87357.jpg" rounded />
                                </div>
                            </Col>
                             <Col xs={12} sm={6} md={8}>
                                <p className="title">Learning Swift</p>
                                <p className="description"> This tutorials teaches how to develop ios applications</p>
                            </Col>
                            <Col xs={12} sm={3} md={2}>
                                <p className="published-date"> August 15, 2016</p>
                            </Col>
                        </Row>
                    </Panel>
                    <Panel onClick={ this.handleClick }>
                        <Row>
                            <Col xs={12} sm={3} md={2} >
                                <div className="image-container">
                                    <Image  src="http://www.freedigitalphotos.net/images/img/homepage/87357.jpg" rounded />
                                </div>
                            </Col>
                             <Col xs={12} sm={6} md={8}>
                                <p className="title">Learning Swift </p>
                                <p className="description"> This tutorials teaches how to develop ios applications</p>
                            </Col>
                            <Col xs={12} sm={3} md={2}>
                                <p className="published-date"> August 15, 2016</p>
                            </Col>
                        </Row>
                    </Panel>
                    <Row>
                        <Col sm={12}>
                            <Button>Visit my blog</Button>
                        </Col>
                    </Row>
                </section>
                    

                
              
			</main>
        );
    }
}

export default PostList;
