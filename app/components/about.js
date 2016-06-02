import React,{ Component } from 'react';
import { Row,Col } from 'react-bootstrap';

class About extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
    }

    render() {
        return  (
        	<div id="about" className="container-fluid">
        		<Row>
        			<Col sm={12}>
        				<h3>About this blog</h3>
        				<p>This blog is developed using MERN(Mongo, Express, Redux (React), Node) stack. </p>
        			</Col>
        		</Row>
        		<Row>
        			<Col sm={12}>
        				<h3>About me</h3>
        				<p>I am a freelance web Developer. I develop with skills of minimal usability designs and 
                        using core XHTML/HTML5, CSS3 and Javascript but not limited to using frameworks such as Foundation, Bootstrap, React and Angular
                        for single page applications. Have worked on PHP frameworks (codeigniter, laravel, wordpress, drupal) and 
                        knowledge of ruby on rails. I love node technologies and how the way they have reformed the full stack development. I am ready to work on 
                        node (npm, Express, Mongo, Meteor) to continously learn and contribute. I have passion for what i do  and really love web technologies, 
                        and hope to do this forever.</p>
        			</Col>
        		</Row>
                <Row>
                    <Col sm={12}>
                        <div id="skillset">
                            <ul id="parentskillset">
                                <li>Web Languages
                                    <ul class="childskillset">
                                        <li>HTML5/XHTML</li>
                                        <li>CSS3/Bootstrap</li>
                                        <li>JavaScript/Jquery</li>
                                        <li>PHP</li>
                                    </ul>
                                </li>
                                <li>Web Frameworks
                                    <ul class="childskillset">
                                        <li>Angular</li>                            
                                        <li>WordPress</li>
                                        <li>Joomla</li>
                                        <li>SAAS</li> 
                                    </ul>
                                </li>
                                <li>Collaboration
                                    <ul class="childskillset">
                                        <li>GitHub</li>
                                        <li>Bower</li>
                                        <li>Grunt</li>
                                        <li>Yomen</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>   
				<Row>
        			<Col sm={12}>
        				<h3>Resume (Download pdf)</h3>
        				<p>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has surviv</p>
        			</Col>
        		</Row>
			</div>
        );
    }
}

export default About;
